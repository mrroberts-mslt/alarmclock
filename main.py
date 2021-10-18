let hour = 0
let minute = 0
basic.forever(function () {
    hour = 9
    minute = 43
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HMM))
    })
})
