export const area = (length: number, width: number) : number =>{
    return length * width;
}

export const perimeter = (sideLeft: number, sideRight: number)=>{
    return (sideLeft*2) + (sideRight*2);
}

const FAKE_DATE = [
    {category: "lunch"},
    {category: "dinner"},
    {category: "breakfast"},
    {category: "lunch"}
]

export const filteredCategories = FAKE_DATE.filter(data => {
    let userChosenOption = "breakfast";
    let {category} = data;
    return category === userChosenOption;
});

