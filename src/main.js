function convert(){
    //CONVERTION VALUES
    var pxToVw = 0.11086474501108648;
    var pxToVh = 0.052083333333333336;
    var pxToEm = 0.063;
    var VwToPx = 19.2;
    var VhToPx = 9.02;
    var EmToPx = 16;
    var myInput = document.getElementById('myInput');
    var myOutput = document.getElementById('myOutput');
    var options = document.getElementById('options');
    var option = options.options[options.selectedIndex].value;

    if (option == 0) {
        console.log(option)
        myOutput.value = parseFloat(myInput.value * pxToVw).toFixed(5)
        //pixel to viewport Width
    } else if (option == 1) {
        console.log(option)
        myOutput.value = parseFloat(myInput.value * pxToVh).toFixed(5)
        //pixel to viewport Height
    } else if (option == 2){
        console.log(option)
        myOutput.value = parseFloat(myInput.value * pxToEm).toFixed(5)
        //pixel to Em
    } else if (option == 3){
        console.log(option)
        myOutput.value = parseFloat(myInput.value * VwToPx).toFixed(5)
        //viewport width to Pixel
    } else if (option == 4){
        console.log(option)
        myOutput.value = parseFloat(myInput.value * VhToPx).toFixed(5)
        //viewport Height to Pixel
    } else if (option == 5){
        console.log(option)
        myOutput.value = parseFloat(myInput.value * EmToPx).toFixed(5)
        //Em to Pixel
    }
    
}
