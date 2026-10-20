#include QMK_KEYBOARD_H

enum layer_names {
    _QWERTY,
    _LAYER1,
    _LAYER2,
    _POINTER
};

// Auto mouse layer
// https://docs.qmk.fm/features/pointing_device#how-to-enable
void keyboard_post_init_user(void) {
    set_auto_mouse_enable(true); // Safely enable it post-boot
}

// Drag scroll start
// https://docs.qmk.fm/features/pointing_device#advanced-drag-scroll
enum custom_keycodes {
    DRAG_SCROLL = SAFE_RANGE,
};

bool set_scrolling = false;

// Modify these values to adjust the scrolling speed
#define SCROLL_DIVISOR_H 8.0
#define SCROLL_DIVISOR_V 8.0

// Variables to store accumulated scroll values
float scroll_accumulated_h = 0;
float scroll_accumulated_v = 0;

// Function to handle mouse reports and perform drag scrolling
report_mouse_t pointing_device_task_user(report_mouse_t mouse_report) {
    // Check if drag scrolling is active
    if (set_scrolling) {
        // Calculate and accumulate scroll values based on mouse movement and divisors
        scroll_accumulated_h += (float)mouse_report.x / SCROLL_DIVISOR_H;
        scroll_accumulated_v += (float)mouse_report.y / SCROLL_DIVISOR_V;

        // Assign integer parts of accumulated scroll values to the mouse report
        mouse_report.h = (int8_t)scroll_accumulated_h;
        mouse_report.v = (int8_t)scroll_accumulated_v;

        // Update accumulated scroll values by subtracting the integer parts
        scroll_accumulated_h -= (int8_t)scroll_accumulated_h;
        scroll_accumulated_v -= (int8_t)scroll_accumulated_v;

        // Clear the X and Y values of the mouse report
        mouse_report.x = 0;
        mouse_report.y = 0;
    }
    return mouse_report;
}

// Function to handle key events and enable/disable drag scrolling
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    switch (keycode) {
        case DRAG_SCROLL:
            // Toggle set_scrolling when DRAG_SCROLL key is pressed or released
            set_scrolling = record->event.pressed;
            break;
        default:
            break;
    }
    return true;
}
// Drag scroll end

#define L_1 MO(_LAYER1)
#define L_2 MO(_LAYER2)
#define L_P MO(_POINTER)
#define CTL_ESC LCTL_T(KC_ESC)

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [_QWERTY] = LAYOUT(
        KC_MPLY,                                                                                          
        KC_TAB,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,                    KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_MINUS,
        CTL_ESC, KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,                    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_LBRC, 
        KC_LSFT, KC_A,    KC_S,    KC_D,    KC_F,    KC_G,                    KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN, KC_QUOT, 
                 KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,                    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH,     
                                           KC_LALT, KC_SPC,  L_1,    KC_ENT,  KC_BSPC, KC_RALT
    ),

    [_LAYER1] = LAYOUT(
        KC_TRNS,                                                                                          
        KC_TRNS, KC_TRNS,      KC_TRNS,      KC_TRNS,      KC_TRNS,      KC_TRNS,     KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,       KC_EQL,  
        KC_TRNS, KC_1,         KC_2,         KC_3,         KC_4,         KC_5,        KC_6,    KC_7,    KC_8,    KC_9,    KC_0,          KC_RBRC,  
        KC_TRNS, ALGR(KC_EQL), LSFT(KC_SLSH), ALGR(KC_7),   ALGR(KC_0),   ALGR(KC_4),  KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT, ALGR(KC_RBRC), KC_BSLS,  
                 KC_NUBS,      ALGR(KC_NUBS),ALGR(KC_8),   ALGR(KC_9),   LSFT(KC_BSLS),KC_HOME,KC_PGDN, KC_PGUP, KC_END,  KC_TRNS, 
                                           KC_TRNS, KC_TRNS, KC_TRNS, KC_INS,  KC_DEL, L_2 
    ),

    [_LAYER2] = LAYOUT(
        KC_TRNS,                                                                                          
        KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,                   KC_F7,   KC_F8,   KC_F9,   KC_F10,  KC_F11,  KC_F12,  
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,  
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,  
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, 
                                           KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS
    ),

    [_POINTER] = LAYOUT(
        KC_BTN3,                                                                                          
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,  
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,  
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,  
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, 
                                           KC_BTN1, DRAG_SCROLL, KC_BTN2, KC_TRNS, KC_TRNS, KC_TRNS
    )
};

#if defined(ENCODER_MAP_ENABLE)
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][2] = {
    [0] = { ENCODER_CCW_CW(KC_VOLU, KC_VOLD) },
    [1] = { ENCODER_CCW_CW(KC_TRNS, KC_TRNS) },
    [2] = { ENCODER_CCW_CW(KC_TRNS, KC_TRNS) },
    [3] = { ENCODER_CCW_CW(MS_WHLU, MS_WHLD) },
};
#endif
