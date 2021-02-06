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

    
    totalCount();
}

function totalCount(){
    const firstClassCount = getInput('first');
    const economyClassCount = getInput('economy');
    // Booking Information Update
    document.getElementById('first-count').innerText = firstClassCount;
    document.getElementById('economy-count').innerText = economyClassCount;
    document.getElementById('amountOfFirst').innerText = firstClassCount * 150;
    document.getElementById('amountOfEconomy').innerText = economyClassCount * 100;

    const subTotal = firstClassCount * 150 + economyClassCount * 100 ;
    const taxCount = subTotal * 0.1;
    document.getElementById('sub-total').innerText = '$' + subTotal;
    document.getElementById('tax-count').innerText = '$' + taxCount;
    const grandTotal = subTotal + taxCount;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

    document.getElementById('booking-total-With-VAT').innerText = '$' + taxCount;
    document.getElementById('sub-booking-total').innerText = '$' + grandTotal;
}

function getInput(whichClass){
    const ticketQuantity = document.getElementById(whichClass + '-input');
    const parseQuantity = parseInt(ticketQuantity.value);
    return parseQuantity;
}

document.getElementById('book-now').addEventListener('click',function(){
    const popUp = document.querySelector('.confirmation-box').style.display = 'block';
    document.getElementById('back-home').addEventListener('click',function(){
        const backHome = document.querySelector('.confirmation-box').style.display = 'none';
    })
})