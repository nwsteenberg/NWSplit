#pragma once

#define RP2040_BOOTLOADER_DOUBLE_TAP_RESET
#define RP2040_BOOTLOADER_DOUBLE_TAP_RESET_TIMEOUT 1000U

// Serial Connection
#define SERIAL_USART_FULL_DUPLEX
#define SERIAL_USART_TX_PIN GP0
#define SERIAL_USART_RX_PIN GP1
#define SERIAL_USART_PIN_SWAP

#define WS2812_PIO_IRQ_PRIORITY 0
#define RGB_MATRIX_SPLIT_SEND_DELAY 5
#define RGB_MATRIX_MAXIMUM_SPEED 100
#define RGB_MATRIX_KEYPRESSES
#define RGBLIGHT_SLEEP
#define RGBLIGHT_SPLIT

// If the sensor is wired to the RIGHT half:
#define POINTING_DEVICE_RIGHT
// RP2040 Hardware SPI Configuration
#define SPI_DRIVER SPID0          // Use SPID0 for SPI0, or SPID1 for SPI1
#define SPI_SCK_PIN GP6          // Clock pin (SCLK)
#define SPI_MOSI_PIN GP5         // Master Out Slave In (MOSI)
#define SPI_MISO_PIN GP4         // Master In Slave Out (MISO)

// PMW3360 Specific Configuration
#define PMW3360_CS_PIN GP3       // Chip Select (CS/NCS) pin
#define ROTATIONAL_TRANSFORM_ANGLE -95
