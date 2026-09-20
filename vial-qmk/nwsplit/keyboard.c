#include "quantum.h"
#include "spi_master.h"

// Initialize Bitbang GPIO pins
void spi_init(void) {
    setPinOutput(SPI_SCK_PIN);
    setPinOutput(SPI_MOSI_PIN);
    setPinInputHigh(SPI_MISO_PIN);
    setPinOutput(PMW33XX_CS_PIN);

    writePinHigh(SPI_SCK_PIN);     // SPI Mode 3: Clock idles HIGH
    writePinHigh(PMW33XX_CS_PIN);   // CS idles HIGH
    writePinHigh(SPI_MOSI_PIN);
}

bool spi_start(pin_t slavePin, bool lsbFirst, uint8_t mode, uint16_t divisor) {
    writePinLow(slavePin);
    return true;
}

void spi_stop(void) {
    writePinHigh(PMW33XX_CS_PIN);
}

// Low-level byte transfer over Software SPI (Mode 3)
static uint8_t soft_spi_transfer_byte(uint8_t byte) {
    uint8_t rx_data = 0;
    for (int i = 7; i >= 0; i--) {
        // Clock falling edge -> set MOSI bit
        writePinLow(SPI_SCK_PIN);
        if (byte & (1 << i)) {
            writePinHigh(SPI_MOSI_PIN);
        } else {
            writePinLow(SPI_MOSI_PIN);
        }
        wait_us(1);

        // Clock rising edge -> sample MISO bit
        writePinHigh(SPI_SCK_PIN);
        wait_us(1);
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
