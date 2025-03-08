input.onButtonPressed(Button.A, function () {
    b = a
    a += -1
})
input.onButtonPressed(Button.B, function () {
    b = a
    a += 1
})
let e = 0
let c = 0
let b = 0
let a = 0
let _51 = 0
let _41 = 0
let _31 = 0
let _21 = 0
let _11 = 0
a = 2
led.plot(a, 4)
music.play(music.stringPlayable("C E G B - - - - ", 822), music.PlaybackMode.UntilDone)
basic.pause(1000)
basic.forever(function () {
    c = randint(0, 4)
    led.unplot(_11, 0)
    led.unplot(_21, 1)
    led.unplot(_31, 2)
    led.unplot(_41, 3)
    led.unplot(_51, 4)
    _51 = _41
    _41 = _31
    _31 = _21
    _21 = _11
    _11 = c
    led.plot(_11, 0)
    led.plot(_21, 1)
    led.plot(_31, 2)
    led.plot(_41, 3)
    led.plot(a, 4)
    if (a < 0) {
        a = 0
    }
    if (a > 4) {
        a = 4
    }
    if (a != b) {
        led.unplot(b, 4)
    }
    led.plot(_51, 4)
    if (a == _51) {
        music.play(music.stringPlayable("C5 A F D - - - - ", 822), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        e = e + 1
        basic.showNumber(e)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
    basic.pause(500)
})
