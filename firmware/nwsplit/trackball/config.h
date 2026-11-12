#define POINTING_DEVICE_RIGHT
#define SPLIT_POINTING_ENABLE

#define SPI_SCK_PIN GP6          // Clock
#define SPI_MOSI_PIN GP3         // MOSI (as wired on your board)
#define SPI_MISO_PIN GP4         // MISO

// PMW3360 Specific Configuration
#define PMW33XX_CS_PIN GP5       
#define PMW33XX_CPI 500
#define POINTING_DEVICE_INVERT_X
#define ROTATIONAL_TRANSFORM_ANGLE -15
