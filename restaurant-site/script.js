let htmlTable = document.querySelector("tbody")

const menuItems=[
    {
    id: 1,
    name: "Special!",
    description: "Delicious earth-chicken soup with our special ingredient: Cesstburs eggs! Completely and totally safe, no surprises when ingested.",
    price: 4.99,
    notes: "Advisory: Gus's Galaxy Grill is not responsible for any injuries that may be caused by ingesting Cesstburs eggs.",
    category: "Soup"
  },
  {
    id: 2,
    name: "Homestyle Tatooine Terrine",
    description: "Hearty mushroom stew with beef, carrots, and portabello mushrooms.",
    price: 3.99,
    notes: "Will add spice on request. Tatooine vaporator mushrooms cost extra.",
    category: "Entree"
  },
  {
    id: 3,
    name: "Gagh a la Gus",
    description: "Famous Klingon Gagh by Gus: earth worms fresh from stasis cargo! A taste of your culture, with a twist by Gus.",
    price: 6.99,
    notes: "Completely unreplicated: fresh worms or your money back!",
    category: "Specialty"
  },
  {
    id: 4,
    name: "Ameglian Major Cow",
    description: "You read that right! Straight from the end of the universe comes the delicacy you've heard so much about. It'll take your order itself!",
    price: 39.99,
    notes: "Don't worry, it likes it!",
    category: "Entree"
  },
  {
    id: 5,
    name: "Yaro Root Salad",
    description: "To those of your watching your waistlines, Gus has prepared a delicious ceaser salad with Yaro Root. Special care has been made to ensure it's ripe this time.",
    price: 7.99,
    notes: "Croutons cost extra.",
    category: "Salad"
  },
  {
    id: 6,
    name: "Gus's Blue Noodles",
    description: "Classic 2049 Earth Blue Noodle recipe straight from Los Angeles. Perfect meal after chasing down rouge androids.",
    price: 4.99,
    notes: "Maybe check under your eye for a model number, can never be too careful.",
    category: "Noodles"
  }
]

if (htmlTable != null){
menuItems.forEach(item =>{
    addRow(item.name, item.description, item.price, item.notes)
});
}

if (document.querySelector("form")){
    document.querySelector('button[type="submit"]').addEventListener("click", validateForm);
}

function validateForm(event){
    event.preventDefault();

    const alerts = document.getElementsByClassName("alert");
    if (alerts.length > 0){
        for (var alertElement of alerts){
            alertElement.remove();
            console.log("remove")
        }
    }

    const reservationData = [
        ["First Name", document.getElementById("firstNameInput")],
        ["Last Name", document.getElementById("lastNameInput")],
        ["Email Address", document.getElementById("emailInput")],
        ["Party Size", document.getElementById("inputGroupSelect01")],
        ["Date", document.getElementById("dateInput")],
        ["Time", document.getElementById("timeInput")],
        ["Seating Preference", document.querySelector('input[name="options-base"]:checked')?.value],
    ];
    
    const notes = document.getElementById("notesInput").value;
    const newsletter = document.getElementById("inlineFormCheck").checked;
    
    var label = 0;
    var input = 1

    var fnameIndex = 0;
    var lnameIndex = 1;
    var emailIndex = 2;
    var partySizeIndex = 3;
    var dateIndex = 4;
    var timeIndex = 5;
    var seatingIndex = 6;

    for(var item of reservationData){
        if (item[label] === "Seating Preference"){
            if (!item[input]){
                alert(`Please input a seating preference.`, "danger")
                return;
            }
        }
        else
        if (!item[input].value || item[input].value === ""){
            alert(`Please input your ${item[label].toLowerCase()}.`, "danger")
            return;
        }
        if (item[input].id === "firstNameInput" || item[input].id === "lastNameInput"){
            if(item[input].value.length > 20){
                alert(`Too Long! Please enter a shorter name.`, "warning")
                return;
            }
        }
        if (item[input].id === "emailInput"){
            if (!item[input].value
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                {
                alert("Must be an email! (Ex. lonestar@spaceballs.com)", "warning");
                return;
            }
        }
        if (item[input].id === "inputGroupSelect01"){
            if (item[input].value <= 0 || item[input].value > 8){
                alert("Party size must be 1 - 8", "danger");
                return;
            }
        }
    }
    if (notes.length > 30){
        alert("Please shorten your notes (Max 30 characters)", "warning");
        return;
    }
    reservation = {
        fname: reservationData[fnameIndex][input].value,
        lname: reservationData[lnameIndex][input].value,
        email: reservationData[emailIndex][input].value,
        partySize: reservationData[partySizeIndex][input].value,
        date: reservationData[dateIndex][input].value,
        time: reservationData[timeIndex][input].value,
        seatingPref: reservationData[seatingIndex][input],
        newsletterOptIn: newsletter,
        notes: notes
    }
    console.log(reservation);
    alert(`We have your reservation, 
        ${reservation.fname}! <br /> We'll see you 
        ${reservation.date} at 
        ${reservation.time}.`, "success", 50000);
        
}


function alert(message, type, time = null){
    const container = document.getElementById("alertContainer");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role="alert";
    alert.innerHTML=`${message} <button type="button" class="btn-close" data-bs-dismiss="alert">`;
    alertContainer.appendChild(alert);

    if (time){
        setTimeout(()=>{
            alert.remove();
        },  time)
    }
}

function addRow(dish, description, price, notes){
    let row = document.createElement("tr");
    let tdDish = document.createElement("td");
    let tdDesc = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdNotes = document.createElement("td");

    tdDish.textContent = dish;
    tdDesc.textContent = description;
    tdPrice.textContent = formatMoney(price);
    tdNotes.textContent = notes;

    row.appendChild(tdDish);
    row.appendChild(tdDesc);
    row.appendChild(tdPrice);
    row.appendChild(tdNotes);

    htmlTable.appendChild(row);
}

function formatMoney(item){
    const money = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD"
    });
    return money.format(item);
}
