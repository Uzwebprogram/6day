var heading = document.querySelector('#heading')
var sum = document.querySelector('#sum')
var button = document.querySelector ("#buttons")
var dollars = 1700
var rubls = 2300
var euros = 1200
button.addEventListener("click", () => {
let select = document.querySelector(".form-select")
    let value = select.value
    if (value == "euro"){
        console.log('ok'); 
        sum * euros
        heading.textContent = sum.value*euros
    }
    else if  (value == "rubl"){
        sum * rubls
        heading.textContent = sum.value*rubls
    }
    else if  (value == "dollar"){
        sum * dollars
        heading.textContent = sum.value*dollars
    }
})