input.onButtonPressed(Button.A, function () {
    sinal = LUZ_VERDE
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    sinal = LUZ_VERMELHA
    basic.showIcon(IconNames.Sad)
})
let LUZ_VERMELHA = 0
let LUZ_VERDE = 0
let sinal = 0
sinal = 0
LUZ_VERDE += 1
LUZ_VERMELHA += 2
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(sinal)
})
