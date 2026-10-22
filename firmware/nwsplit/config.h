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
// // Trackball start
// #define SPI_SCK_PIN GP6          // Clock
// #define SPI_MOSI_PIN GP3         // MOSI (as wired on your board)
// #define SPI_MISO_PIN GP4         // MISO
//
// // PMW3360 Specific Configuration
// #define PMW33XX_CS_PIN GP5       
// #define POINTING_DEVICE_ROTATION_180
// // Trackball end
// Trackpad start
#define AZOTEQ_IQS5XX_TPS43            // Loads specific dimensions and resolution for TPS43
#define AZOTEQ_IQS5XX_RESET_PIN GP6    // Active-low reset pin
#define AZOTEQ_IQS5XX_RDY_PIN   GP3    // Active-high RDY pin

// RP2040 I2C Configuration
#define I2C_DRIVER I2CD1
#define I2C1_SDA_PIN GP4
#define I2C1_SCL_PIN GP5
// Trackpad end

// Mouse layer setup
#define POINTING_DEVICE_AUTO_MOUSE_ENABLE
#define AUTO_MOUSE_DEFAULT_LAYER 3
#define AUTO_MOUSE_TIMEOUT 500
