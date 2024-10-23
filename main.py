def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        basic.show_icon(IconNames.HEART)
        pause(100)
        basic.clear_screen()
basic.forever(on_forever)
