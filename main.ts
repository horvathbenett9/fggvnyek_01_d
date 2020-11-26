function felkapcsol_2 (x: number, y: number, vár: number, hv: number) {
    for (let index = 0; index <= hv; index++) {
        led.plot(x, y)
        basic.pause(vár)
        led.unplot(x, y)
        basic.pause(vár)
        led.plot(x, y)
        basic.pause(vár)
        led.unplot(x, y)
    }
    music.playTone(262, music.beat(BeatFraction.Double))
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    felkapcsol_2(2, 2, 100, 4)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("H")
    basic.pause(500)
    basic.showString("e")
    basic.pause(500)
    basic.showString("l")
    basic.pause(500)
    basic.showString("l")
    basic.pause(500)
    basic.showString("o")
    basic.pause(500)
    basic.showString("!")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        felkapcsol_2(index, 0, 100, 2)
    }
})
basic.forever(function () {
	
})
