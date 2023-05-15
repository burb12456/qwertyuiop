radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
    }
})
input.onButtonPressed(Button.A, function () {
    player_direction = -1
    led.unplot(player_1_X, 4)
    led.unplot(player_1_X, 3)
    player_1_X += -1
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    bullet_x = player_1_X
    bullet_x += player_direction
    led.plot(bullet_x, 3)
    basic.pause(100)
    led.unplot(bullet_x, 3)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    player_direction = 1
    led.unplot(player_1_X, 4)
    led.unplot(player_1_X, 3)
    player_1_X += 1
    radio.sendNumber(1)
})
let rpeate = 0
let bullet_x = 0
let player_1_X = 0
let player_direction = 0
let dummy_x = 0
let dummy_y = 0
radio.setGroup(1)
led.setDisplayMode(DisplayMode.Greyscale)
dummy_y = 0
dummy_x = 4
player_direction = 1
let fall = 0
player_1_X = 0
if (fall == 0) {
    for (let index = 0; index < 3; index++) {
        basic.pause(100)
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_y += 1
        led.plotBrightness(dummy_x, dummy_y, 103)
        led.plotBrightness(dummy_x, dummy_y + 1, 105)
    }
    fall = 1
}
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    led.plot(player_1_X, 4)
    led.plot(player_1_X, 3)
    if (player_direction == 1) {
        rpeate = 7 - player_1_X
    } else {
        rpeate = 0 + player_1_X
    }
})
