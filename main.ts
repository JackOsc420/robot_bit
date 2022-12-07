radio.onReceivedNumber(function (receivedNumber) {
    comando = receivedNumber
    if (comando == 1) {
        izquierda()
    }
    if (comando == 2) {
        derecha()
    }
    if (comando == 3) {
        adelante()
    }
    if (comando == 4) {
        parar()
    }
    if (comando == 5) {
        atras()
    }
})
function derecha () {
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
    robotbit.MotorRun(robotbit.Motors.M1A, 0)
}
function adelante () {
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
}
function parar () {
    robotbit.MotorStop(robotbit.Motors.M1A)
}
function atras () {
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
}
function izquierda () {
    robotbit.MotorRun(robotbit.Motors.M2A, 0)
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
}
let comando = 0
radio.setGroup(8)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        comando = 1
        radio.sendNumber(comando)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        comando = 2
        radio.sendNumber(comando)
    }
    if (input.buttonIsPressed(Button.A)) {
        comando = 3
        radio.sendNumber(comando)
    }
    if (input.isGesture(Gesture.Shake)) {
        comando = 4
        radio.sendNumber(comando)
    }
    if (input.buttonIsPressed(Button.B)) {
        comando = 5
        radio.sendNumber(comando)
    }
})
