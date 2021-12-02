input.onButtonPressed(Button.A, function () {
    if (x >= 4) {
        dx = 1
    } else if (x <= 0) {
        dx = -1
    }
    if (xx >= 4) {
        dxx = 1
    } else if (xx <= 0) {
        dxx = -1
    }
    if (xxx >= 4) {
        dxxx = 1
    } else if (xxx <= 0) {
        dxxx = -1
    }
    x += dx
    xx += dxx
    xxx += dxxx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(xxx, y, 20)
        led.plotBrightness(xx, y, 60)
        led.plotBrightness(x, y, 225)
        y += 1
    }
    basic.pause(100)
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        if (x >= 4) {
            dx = -1
        } else if (x <= 0) {
            dx = 1
        }
        if (xx >= 4) {
            dxx = -1
        } else if (xx <= 0) {
            dxx = 1
        }
        if (xxx >= 4) {
            dxxx = -1
        } else if (xxx <= 0) {
            dxxx = 1
        }
        x += dx
        xx += dxx
        xxx += dxxx
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(xxx, y, 20)
            led.plotBrightness(xx, y, 60)
            led.plotBrightness(x, y, 225)
            y += 1
        }
        basic.pause(100)
    }
})
let y = 0
let dxxx = 0
let xxx = 0
let dxx = 0
let xx = 0
let dx = 0
let x = 0
x = 2
dx = 1
xx = 1
dxx = 1
xxx = 0
dxxx = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    if (xx >= 4) {
        dxx = -1
    } else if (xx <= 0) {
        dxx = 1
    }
    if (xxx >= 4) {
        dxxx = -1
    } else if (xxx <= 0) {
        dxxx = 1
    }
    x += dx
    xx += dxx
    xxx += dxxx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(xxx, y, 20)
        led.plotBrightness(xx, y, 60)
        led.plotBrightness(x, y, 225)
        y += 1
    }
    basic.pause(100)
})
