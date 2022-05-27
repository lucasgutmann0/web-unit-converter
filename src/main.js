function convert(){
    let input = mainInput.text 
    let option = optionList.currentIndex
    console.log(option)

    //valores
    let pxToVw = 0.11086474501108648
    let pxToVh = 0.052083333333333336
    let pxToEm = 0.063
    let VwToPx = 19.2
    let VhToPx = 9.02
    let EmToPx = 16

    if (option == 0) { 
        res.text = parseFloat(input * pxToVw).toFixed(5)
        inputUnit.text = ("Px")
        outputUnit.text = ("Vw")
        //pixel to viewport width
    } else if (option == 1) {
        res.text = parseFloat(input * pxToVh).toFixed(5)
        inputUnit.text = ("Px")
        outputUnit.text = ("Vh")
        //pixel to viewport Height
    } else if (option == 2){
        res.text = parseFloat(input * pxToEm).toFixed(5)
        inputUnit.text = ("Px")
        outputUnit.text = ("Em")
        //pixel to Em
    } else if (option == 3){
        res.text = parseFloat(input * VwToPx).toFixed(5)
        inputUnit.text = ("Vw")
        outputUnit.text = ("Px")
        //viewport width to Pixel
    } else if (option == 4){//pixel to viewport
        res.text = parseFloat(input * VhToPx).toFixed(5)
        inputUnit.text = ("Vh")
        outputUnit.text = ("Px")
        //viewport Height to Pixel
    } else if (option == 5){//pixel to viewport
        res.text = parseFloat(input * EmToPx).toFixed(5)
        inputUnit.text = ("Em")
        outputUnit.text = ("Px")
        //Em to Pixel
    }
}
