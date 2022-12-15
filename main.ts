
/*
let kostka = Math.random();



    input.onGesture(Gesture.Shake, function () {
        if (kostka) {

        }
    }) */
let pocitani2 = 0
let pocitani = 0
let kostka = randint (1, 6)


input.onGesture(Gesture.Shake, function() {
    if (kostka == 6) {
        (music.ringTone(Note.C));
        whaleysans.showNumber(6)

        basic.pause(100)

        basic.clearScreen()
    } else {
        (music.ringTone(Note.B));
        whaleysans.showNumber(kostka)
        basic.pause(100)

        basic.clearScreen()
    }
})

if (kostka == 6) {pocitani2 += 1}
if (kostka ==5) {pocitani2 +=1}
if (kostka == 4) { pocitani2 += 1}
if (kostka == 3) { pocitani2 += 1}
if (kostka == 2) { pocitani2 += 1}
if (kostka == 1) { pocitani2 += 1}



    if (kostka == 6) {pocitani +=1}
    
    if (pocitani == 3) { 
        
        music.ringTone(Note.B)
        
        basic.showString("Hotovo!")

        basic.clearScreen()

        basic.showString("pocet pokusu:")

        basic.clearScreen()

        whaleysans.showNumber(pocitani2)


    };
    