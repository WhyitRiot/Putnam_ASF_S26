let square = function(num){
    return num*num;
}
let squareTwo = (num)=>{
    return num*num;
}

let squareThree = num =>{
    return num * num;
}

let squareFour = num => num*num;

let squareFive = num =>{
    num = num * num;
    return num;
}

console.log(square(2));
console.log(squareTwo(5));
console.log(squareThree(7));
console.log(squareFour(8));
console.log(squareFive(9));

let canYouDrink= (age) => {
    if (age < 21){
        console.log("No");
    }
    else{
        console.log("Yes");
    }
}

let canYouDrinkTwo = (age = 20) =>{
    return age >= 21 ? "YES" : "NO";
}
console.log(canYouDrinkTwo(21));
console.log(canYouDrinkTwo());