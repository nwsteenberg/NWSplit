#pragma once

#define RP2040_BOOTLOADER_DOUBLE_TAP_RESET
#define RP2040_BOOTLOADER_DOUBLE_TAP_RESET_TIMEOUT 1000U

// Serial Connection
#define SERIAL_USART_FULL_DUPLEX
#define SERIAL_USART_TX_PIN GP0
#define SERIAL_USART_RX_PIN GP1
#define SERIAL_USART_PIN_SWAP

// RGB Matrix Settings
#define WS2812_PIO_IRQ_PRIORITY 0
#define RGB_MATRIX_SPLIT_SEND_DELAY 5
#define RGB_MATRIX_MAXIMUM_SPEED 100
#define RGB_MATRIX_KEYPRESSES

// Pointing Device & SPI Configuration (PIO SPI for GP4/GP5/GP6)
#define POINTING_DEVICE_RIGHT
#define SPLIT_POINTING_ENABLE
#define SPI_SCK_PIN GP6          // Clock
#define SPI_MOSI_PIN GP5         // MOSI (as wired on your board)
#define SPI_MISO_PIN GP4         // MISO

// PMW3360 Specific Configuration
#define PMW33XX_CS_PIN GP3       
#define ROTATIONAL_TRANSFORM_ANGLE -95
