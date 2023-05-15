def on_received_number(receivedNumber):
    global dummy_x, player_1_X, life
    if receivedNumber == 1:
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_x += -1
        led.plot(dummy_x, dummy_y)
        led.plot(dummy_x, dummy_y + 1)
    if receivedNumber == 2:
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_x += 1
        led.plot(dummy_x, dummy_y)
        led.plot(dummy_x, dummy_y + 1)
    if receivedNumber == 0:
        led.plot(-1 + dummy_x, 3)
        if player_1_X + 1 == dummy_x:
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
        basic.pause(100)
        led.unplot(-1 + dummy_x, 3)
    if receivedNumber == 3:
        dummy_x2 = 0
        led.plot(dummy_x + 1, 3)
        if player_1_X + -1 == dummy_x:
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
        basic.pause(100)
        led.unplot(1 + dummy_x2, 3)
    if 90 == receivedNumber:
        basic.show_icon(IconNames.STICK_FIGURE)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global player_direction, player_1_X
    player_direction = -1
    led.unplot(player_1_X, 4)
    led.unplot(player_1_X, 3)
    player_1_X += -1
    radio.send_number(2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global bullet_x, dummy_x
    bullet_x = player_1_X
    bullet_x += player_direction
    led.plot(bullet_x, 3)
    basic.pause(100)
    led.unplot(bullet_x, 3)
    if player_direction == -1:
        radio.send_number(3)
    else:
        radio.send_number(0)
    if player_direction == 1:
        if dummy_x == player_1_X + 1:
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
    elif player_direction == -1:
        if dummy_x == player_1_X + -1:
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
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global player_direction, player_1_X
    player_direction = 1
    led.unplot(player_1_X, 4)
    led.unplot(player_1_X, 3)
    player_1_X += 1
    radio.send_number(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

life_mover = 0
rpeate = 0
bullet_x = 0
fall = 0
player_1_X = 0
player_direction = 0
dummy_x = 0
dummy_y = 0
life_checker = 4
life = 3
radio.set_group(1)
radio.send_number(99999)
led.set_display_mode(DisplayMode.GREYSCALE)
dummy_y = 0
dummy_x = 4
player_direction = 1
player_1_X = 0
if fall == 0:
    for index in range(3):
        basic.pause(100)
        led.unplot(dummy_x, dummy_y)
        led.unplot(dummy_x, dummy_y + 1)
        dummy_y += 1
        led.plot_brightness(dummy_x, dummy_y, 103)
        led.plot_brightness(dummy_x, dummy_y + 1, 105)
    fall = 1

def on_every_interval():
    pass
loops.every_interval(1000, on_every_interval)

def on_forever():
    global rpeate, life_mover
    led.plot(player_1_X, 4)
    led.plot(player_1_X, 3)
    if player_direction == 1:
        rpeate = 7 - player_1_X
    else:
        rpeate = 0 + player_1_X
    if life == 0:
        basic.show_icon(IconNames.SKULL)
        radio.send_number(90)
    if not (life == life_checker):
        life_mover = 0
        led.unplot(0, 0)
        led.unplot(1, 0)
        led.unplot(2, 0)
        for index2 in range(life):
            led.plot(life_mover, 0)
            life_mover += 1
basic.forever(on_forever)
