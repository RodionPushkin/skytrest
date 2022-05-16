let formatPhone = function(){
    let input = document.querySelector('#phone')
    input.addEventListener("keydown", onPhoneKeyDown)
    let inputNumbersValue = getInputNumbersValue(input)
    let formattedInputValue = ""
    if(!inputNumbersValue) return input.value = ""
    if(["7","8","9"].indexOf(inputNumbersValue[0]) > -1){
        if(inputNumbersValue[0] == 9) inputNumbersValue = "7"+inputNumbersValue
        let firstSymbols = (inputNumbersValue[0] == 8) ? "8" : "+7"
        formattedInputValue = firstSymbols+" "
        if(inputNumbersValue.length > 1){
            formattedInputValue += "("+inputNumbersValue.substring(1,4)
        }
        if(inputNumbersValue.length >= 5){
            formattedInputValue += ") "+inputNumbersValue.substring(4,7)
        }
        if(inputNumbersValue.length >= 8){
            formattedInputValue += "-"+inputNumbersValue.substring(7,9)
        }
        if(inputNumbersValue.length >= 10){
            formattedInputValue += "-"+inputNumbersValue.substring(9,11)
        }
    }else{
        formattedInputValue = "+"+inputNumbersValue.substring(0,16)
    }
    input.value = formattedInputValue
}
let getInputNumbersValue = function(input){
    return input.value.replace(/\D/g, "")
}
let onPhoneKeyDown = function(e){
    if(e.keyCode == 8 && getInputNumbersValue(e.target). length == 1) e.target.value = ""
}
$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});