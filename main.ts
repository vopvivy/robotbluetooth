bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        speedMotorValue += 10
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        speedMotorValue += -10
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    }
})
let speedMotorValue = 0
speedMotorValue = 10
MotorDriver.MotorStop(Motor.A)
MotorDriver.MotorStop(Motor.B)
basic.showLeds(`
    # . . # #
    # . . # #
    # # . . .
    # . # . .
    # # . . .
    `)
