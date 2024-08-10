def on_bluetooth_connected():
    basic.show_leds("""
        # . . . #
        . # # # .
        . . # . .
        # . . . #
        . # # # .
        """)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_leds("""
        # . . . #
        . # # # .
        . . . . .
        . # # # .
        # . . . #
        """)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_forever():
    pass
basic.forever(on_forever)
