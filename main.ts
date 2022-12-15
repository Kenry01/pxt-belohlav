let pocetPokusu = 0
let pocetSestek = 0

input.onGesture(Gesture.Shake, function () {
    let kostka = randint(1, 6)
    if (kostka == 6) {
        music.playTone(Note.C, 200)
        pocetSestek += 1
    } else {
        music.playTone(Note.B, 200)
    }
    basic.showNumber(kostka, 0)
    basic.pause(300)
    basic.clearScreen()
    if (pocetSestek >= 3) {
        whaleysans.showNumber(pocetPokusu)
        basic.pause(3000)
        pocetPokusu = 0
        pocetSestek = 0
    }
    pocetPokusu += 1
})