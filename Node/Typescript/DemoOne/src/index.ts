//I have a comment
let dogg: string = "Luna"

class dog{
    name: string;
    age: number;
    breed: string;

    constructor(name: string, age: number, breed: string){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}

interface Dog{
    name: string;
}

console.log(new dog("luna", 2, "labrador"));
