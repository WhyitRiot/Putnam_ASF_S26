let htmlTable = document.querySelector("tbody")

let menuItem= {
    dish: "Spaghetti",
    description: "Delicious noodles",
    price: "$4.00",
    notes:"It's pretty good"
}

let arrayMenuItems = [menuItem];

arrayMenuItems.forEach(item =>{
    addRow(item.dish, item.description, item.price, item.notes)
});


function addRow(dish, description, price, notes){
    let row = document.createElement("tr");

    let tdDish = document.createElement("td");
    let tdDesc = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdNotes = document.createElement("td");

    tdDish.textContent = dish;
    tdDesc.textContent = description;
    tdPrice.textContent = price;
    tdNotes.textContent = notes;

    row.appendChild(tdDish);
    row.appendChild(tdDesc);
    row.appendChild(tdPrice);
    row.appendChild(tdNotes);

    htmlTable.appendChild(row);
}
