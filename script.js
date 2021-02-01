function eventHandler(whichClass,isIncrese){
    const inputValue = document.getElementById(whichClass + '-input');
    const parseValue = parseInt(inputValue.value);
    let newValue = parseValue;
    if(isIncrese == true){
        newValue = parseValue + 1;
    }
    if(isIncrese == false && parseValue > 0){
        newValue = parseValue - 1 ;
    }
    inputValue.value = newValue;
}