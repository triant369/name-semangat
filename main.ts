input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showString("Semangat!")
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showString("Hello!")
basic.showString("Setia_3n2")
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
