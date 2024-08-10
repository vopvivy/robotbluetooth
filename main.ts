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
	
})
basic.showLeds(`
    # . . # #
    # . . # #
    # # . . .
    # . # . .
    # # . . .
    `)
MotorDriver.MotorStop(Motor.A)
MotorDriver.MotorStop(Motor.B)
