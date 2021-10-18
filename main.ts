input.onButtonPressed(Button.A, function () {
    basic.showString("" + hour + ":" + minute)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
let minute = 0
let hour = 0
hour = 9
minute = 43
timeanddate.setTime(hour, minute, 0, timeanddate.MornNight.AM)
loops.everyInterval(60000, function () {
    minute = minute + 1
    if (minute == 60) {
        minute = 0
    }
})
basic.forever(function () {
    if (hour == 10 && minute == 45) {
        basic.showIcon(IconNames.Heart)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
loops.everyInterval(3600000, function () {
    hour = hour + 1
    if (hour == 24) {
        hour = 0
    }
})
