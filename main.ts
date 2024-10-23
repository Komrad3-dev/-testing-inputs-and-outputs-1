basic.forever(function on_forever() {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
        pause(100)
        basic.clearScreen()
    }
    
})
