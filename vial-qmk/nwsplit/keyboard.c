#include "quantum.h"
#include "spi_master.h"
#include "print.h"

static pin_t current_cs_pin = NO_PIN;

void keyboard_post_init_user(void) {
    debug_enable = true;
    debug_mouse = true;
}

void spi_init(void) {
    setPinOutput(SPI_SCK_PIN);
    setPinOutput(SPI_MOSI_PIN);
    setPinInputHigh(SPI_MISO_PIN);
    setPinOutput(PMW33XX_CS_PIN);

    writePinHigh(SPI_SCK_PIN);      // SPI Mode 3: Clock idles HIGH
    writePinHigh(PMW33XX_CS_PIN);   // CS idles HIGH
    writePinHigh(SPI_MOSI_PIN);
}

bool spi_start(pin_t slavePin, bool lsbFirst, uint8_t mode, uint16_t divisor) {
    current_cs_pin = slavePin;
    if (current_cs_pin != NO_PIN) {
        writePinLow(current_cs_pin);
    }
    wait_us(1);
    return true;
}

void spi_stop(void) {
    wait_us(1);
    if (current_cs_pin != NO_PIN) {
        writePinHigh(current_cs_pin);
    }
}

// Low-level byte transfer over Software SPI (Mode 3)
static uint8_t soft_spi_transfer_byte(uint8_t byte) {
    uint8_t rx_data = 0;
    for (int i = 7; i >= 0; i--) {
        writePinLow(SPI_SCK_PIN);
        if (byte & (1 << i)) {
            writePinHigh(SPI_MOSI_PIN);
        } else {
            writePinLow(SPI_MOSI_PIN);
        }
        wait_us(2);

        writePinHigh(SPI_SCK_PIN);
        wait_us(2);
        if (readPin(SPI_MISO_PIN)) {
            rx_data |= (1 << i);
        }
    }
    return rx_data;
}

spi_status_t spi_write(uint8_t data) {
    soft_spi_transfer_byte(data);
    return SPI_STATUS_SUCCESS;
}

uint8_t spi_read(void) {
    return soft_spi_transfer_byte(0x00);
}

spi_status_t spi_transmit(const uint8_t *data, uint16_t length) {
    for (uint16_t i = 0; i < length; i++) {
        soft_spi_transfer_byte(data[i]);
    }
    return SPI_STATUS_SUCCESS;
}

spi_status_t spi_receive(uint8_t *data, uint16_t length) {
    for (uint16_t i = 0; i < length; i++) {
        data[i] = soft_spi_transfer_byte(0x00);
    }
    return SPI_STATUS_SUCCESS;
}

spi_status_t spi_transmit_receive(const uint8_t *transmit_data, uint8_t *receive_data, uint16_t length) {
    for (uint16_t i = 0; i < length; i++) {
        receive_data[i] = soft_spi_transfer_byte(transmit_data[i]);
    }
    return SPI_STATUS_SUCCESS;
}

// Directly query PMW3360 Register 0x00 (Product ID)
static uint8_t test_read_product_id(void) {
    writePinLow(PMW33XX_CS_PIN);
    wait_us(1);
    soft_spi_transfer_byte(0x00 & 0x7F); // Read Reg 0x00
    wait_us(160);                        // PMW3360 tSRAD delay
    uint8_t val = soft_spi_transfer_byte(0x00);
    writePinHigh(PMW33XX_CS_PIN);
    return val;
}

// Runs continuously in the background
static uint16_t log_timer = 0;
void housekeeping_task_user(void) {
    if (timer_elapsed(log_timer) > 2000) {
        log_timer = timer_read();
        uint8_t prod_id = test_read_product_id();
        uprintf("PMW3360 Test Read [Reg 0x00]: 0x%02X (Expected: 0x42)\n", prod_id);
    }
}
