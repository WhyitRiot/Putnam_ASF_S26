let animals = ["dog", "cat", "mouse"];
console.log(animals);

// Keno bought a new cat
// 4 ways to alter an array by adding/deleting first elements.


animals.unshift("cat2");
animals.shift();
console.log(animals);

let houses = ['doghouse', 'scratching post', 'cage'];


let newArray = [...animals, ...houses];
console.log(newArray);

//iterate
newArray.forEach((item, index)=> {
    var logged = item + " is the " + (index + 1);
    if (index === 0){
        console.log(logged + "st element");
    }
    else if (index === 1){
        console.log(logged + "nd element");
    }
    else if (index === 2){
        console.log(logged + "rd element");
    }
    else{
        console.log(logged + "th element");
    }
});

let colors= ['red', 'green', 'blue'];
let result = colors.map(data =>{
    return data + "'s"
});
console.log(result);

function findValue(one, two){
    return one + two;
}
console.log(findValue(1, 2));
console.log(findValue("1", "2"));
console.log(findValue("What", "Ever"));

//filtering aka filter()
//returns a new array with only th matching conditions
let words = ['cat', 'house', 'mouse', 1];

let matching = words.filter(item =>{
    return item.length > 4 || item > 0;
});

console.log(matching);