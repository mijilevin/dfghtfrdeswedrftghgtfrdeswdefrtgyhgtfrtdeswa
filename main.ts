input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("" + randint(0, 1e+182) + randint(0, 1e+74))
    }
})
basic.forever(function () {
	
})
