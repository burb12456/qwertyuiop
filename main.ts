radio.onReceivedNumber(function (receivedNumber) {
    let dummy_x2: number;
if (receivedNumber == 1) {
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_x += -1
        led.plot(dummy_x, dummy_y)
        led.plot(dummy_x, dummy_y + 1)
    }
    if (receivedNumber == 2) {
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_x += 1
        led.plot(dummy_x, dummy_y)
        led.plot(dummy_x, dummy_y + 1)
    }
    if (receivedNumber == 0) {
        led.plot(-1 + dummy_x, 3)
        if (player_1_X + 1 == dummy_x) {
            led.unplot(player_1_X, 4)
            led.unplot(player_1_X, 3)
            player_1_X += -1
            led.plot(player_1_X, 3)
            led.plot(player_1_X, 2)
            basic.pause(500)
            led.unplot(player_1_X, 2)
            led.unplot(player_1_X, 3)
            led.plot(player_1_X, 3)
            led.plot(player_1_X, 4)
            life += -1
        }
        basic.pause(100)
        led.unplot(-1 + dummy_x, 3)
    }
    if (receivedNumber == 3) {
        dummy_x2 = 0
        led.plot(dummy_x + 1, 3)
        if (player_1_X + -1 == dummy_x) {
            led.unplot(player_1_X, 4)
            led.unplot(player_1_X, 3)
            player_1_X += 1
            led.plot(player_1_X, 3)
            led.plot(player_1_X, 2)
            basic.pause(500)
            led.unplot(player_1_X, 2)
            led.unplot(player_1_X, 3)
            led.plot(player_1_X, 3)
            led.plot(player_1_X, 4)
            life += -1
        }
        basic.pause(100)
        led.unplot(1 + dummy_x2, 3)
    }
    if (90 == receivedNumber) {
        basic.showIcon(IconNames.StickFigure)
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
    if (player_direction == -1) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
    if (player_direction == 1) {
        if (dummy_x == player_1_X + 1) {
            led.unplot(dummy_x, 4)
            led.unplot(dummy_x, 3)
            dummy_x += 1
            led.plot(dummy_x, 3)
            led.plot(dummy_x, 2)
            basic.pause(500)
            led.unplot(dummy_x, 2)
            led.unplot(dummy_x, 3)
            led.plot(dummy_x, 3)
            led.plot(dummy_x, 4)
        }
    } else if (player_direction == -1) {
        if (dummy_x == player_1_X + -1) {
            led.unplot(dummy_x, 4)
            led.unplot(dummy_x, 3)
            dummy_x += -1
            led.plot(dummy_x, 3)
            led.plot(dummy_x, 2)
            basic.pause(500)
            led.unplot(dummy_x, 2)
            led.unplot(dummy_x, 3)
            led.plot(dummy_x, 3)
            led.plot(dummy_x, 4)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    player_direction = 1
    led.unplot(player_1_X, 4)
    led.unplot(player_1_X, 3)
    player_1_X += 1
    radio.sendNumber(1)
})
let life_mover = 0
let rpeate = 0
let bullet_x = 0
let fall = 0
let player_1_X = 0
let player_direction = 0
let dummy_x = 0
let dummy_y = 0
let life = 3
let life_checker = life + 1
radio.setGroup(1)
radio.sendNumber(99999)
led.setDisplayMode(DisplayMode.Greyscale)
dummy_y = 0
dummy_x = 4
player_direction = 1
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
    if (life == 0) {
        basic.showIcon(IconNames.Skull)
        radio.sendNumber(90)
    }
    if (!(life == life_checker)) {
        life_mover = 0
        for (let index = 0; index < 15; index++) {
            led.unplot(life_mover, 0)
            life_mover += 1
        }
        life_mover = 0
        for (let index = 0; index < life; index++) {
            led.plot(life_mover, 0)
            life_mover += 1
        }
    }
})
