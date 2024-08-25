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
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedMotorValue)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedMotorValue)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        speedMotorValue += 10
        speedMotorValue = Math.constrain(speedMotorValue, 10, 90)
        basic.clearScreen()
        basic.showNumber(speedMotorValue / 10)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        speedMotorValue += -10
        speedMotorValue = Math.constrain(speedMotorValue, 10, 90)
        basic.clearScreen()
        basic.showNumber(speedMotorValue / 10)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
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
