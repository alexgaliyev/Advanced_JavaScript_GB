document.getElementById('result').onclick = getResult;

function getResult() {
    var menu = document.getElementsByClassName('burg');
    var price = 0;
    var calories = 0;
    for(var i = 0; i < menu.length; i++){
        if(menu[i].checked){
            price += parseFloat(menu[i].getAttribute('date-price'));
            calories += parseFloat(menu[i].getAttribute('date-calories'));
        }
    }
    document.getElementById('price').innerHTML = price;
    document.getElementById('calories').innerHTML = calories;
}
