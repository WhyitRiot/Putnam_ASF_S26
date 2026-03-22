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
  },
    {
        id: 7,
        name: "Nebula Nachos",
        description: "Tri-layered chips infused with ionized cheese and dark matter beans. Slightly gravitational—may pull nearby snacks into orbit.",
        price: 5.99,
        notes: "Do not consume near loose silverware.",
        category: "Appetizer"
    },
    {
        id: 8,
        name: "Andromeda Fried Rice",
        description: "Classic fried rice with vegetables sourced from three separate galaxies and one suspicious asteroid colony.",
        price: 6.49,
        notes: "Contains trace amounts of stardust.",
        category: "Entree"
    },
    {
        id: 9,
        name: "Quantum Quesadilla",
        description: "Exists in both eaten and uneaten states until observed. Stuffed with cheese that may or may not be there.",
        price: 4.49,
        notes: "Refunds only issued if you prove it never existed.",
        category: "Specialty"
    },
    {
        id: 10,
        name: "Pluto Platter",
        description: "A small but emotionally significant sampler dish. Comes with sliders, fries, and a side of existential crisis.",
        price: 3.99,
        notes: "Still a planet in our hearts.",
        category: "Combo"
    },
    {
        id: 11,
        name: "Wormhole Wings",
        description: "Spicy chicken wings that teleport directly from fryer to plate. Occasionally arrive before you order them.",
        price: 7.99,
        notes: "If you receive two orders, please report temporal anomaly.",
        category: "Appetizer"
    },
    {
        id: 12,
        name: "Dark Matter Milkshake",
        description: "A thick, mysterious shake that absorbs light and possibly your soul. Chocolate flavor suspected.",
        price: 4.99,
        notes: "Straw may disappear mid-use.",
        category: "Drink"
    },
    {
        id: 13,
        name: "Cosmic Carbonara",
        description: "Pasta tossed in a creamy sauce harvested from free-range space comets and ethically sourced bacon.",
        price: 8.99,
        notes: "Warning: may cause mild time dilation after consumption.",
        category: "Noodles"
    },
    {
        id: 14,
        name: "Alien Avocado Toast",
        description: "Smashed avocado on multigrain asteroid bread, topped with seeds from a plant that blinked first.",
        price: 6.99,
        notes: "Trendier than it has any right to be.",
        category: "Breakfast"
    },
    {
        id: 15,
        name: "Saturn Ring Calamari",
        description: "Perfectly fried rings with a crisp that rivals Saturn itself. Served with a tangy nebula sauce.",
        price: 7.49,
        notes: "Rings not to scale.",
        category: "Appetizer"
    },
    {
        id: 16,
        name: "Meteor Meatballs",
        description: "Dense, fiery meatballs that crash into your plate with explosive flavor.",
        price: 6.79,
        notes: "Plate may still be hot from impact.",
        category: "Entree"
    },
    {
        id: 17,
        name: "Galactic Gumbo",
        description: "A rich stew combining flavors from across the universe—spicy, smoky, and slightly sentient.",
        price: 7.99,
        notes: "If it speaks to you, please do not respond.",
        category: "Soup"
    },
    {
        id: 18,
        name: "Binary Star Burger",
        description: "Two patties orbiting each other in perfect harmony, topped with twin cheeses and solar flare sauce.",
        price: 9.49,
        notes: "May collapse into a black hole if overcooked.",
        category: "Entree"
}
];
updateCart();

if (document.URL.includes("cart.html")){
    renderCart();
}

function renderCart(){
        let cartHeader = document.getElementById("cartHeader");
        let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart.length > 0){
        let cartTable = document.getElementById("cartTable");
        let total = 0;
        let totalPlusTax = 0;
        for (var i of cart){
            total += menuItems[i.id - 1].price * i.quantity;
            totalPlusTax += total * 1.08;
        }
        cartHeaderDiv = document.createElement("div");
        cartHeaderDiv.setAttribute("class", "row justify-content-center");
        cartHeaderDiv.setAttribute("id", "cartHeaderDivTarget");
        cartHeaderDiv.innerHTML = `
        <div class="cart-summary-bar bg-dark text-white rounded">
                    <div class="row justify-content-center">
                    <div class="col-2 d-flex justify-content-center">
                        <span>Subtotal: ${formatMoney(total)}</span>
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        <span>Tax: (8%) ${formatMoney(total * 1.08)}</span>
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        <span>Total: ${formatMoney(totalPlusTax)}</span>
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        <div class="row justify-content-center">
                            <div class="col-auto d-flex justify-content-center mt-2 mb-2 gap-2">
                                <button class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdropClear">Cancel Order</button>
                                <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdropCheckout">Checkout</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        `
        cartHeader.appendChild(cartHeaderDiv);
        row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("id", "cartTableTarget")
        row.innerHTML =
        `      
                        <div class="row mt-5 pt-5 justify-content-center">
            <div class="col-8">
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr class="trHeader">
                            <th class="text-center thead_custom"scope="col">#</th>
                            <th class="text-center thead_custom"scope="col">Dish</th>
                            <th class="text-center thead_custom"scope="col">Price</th>
                            <th class="text-center thead_custom"scope="col">Quantity</th>
                            <th class="text-center" colspan="2"></th>
                        </tr>
                    </thead>
                        <tbody>
                        </tbody>
                </table>
            </div>
        `
        cartTable.appendChild(row);
        table = document.querySelector("tbody");
        cart.forEach(item =>{
            populateCartTable(item, table)
        });
    }
    else{
        row = document.createElement("div");
        row.setAttribute("class", "row d-flex justify-content-center");
        row.innerHTML= `
                    <div class="col-8 d-flex flex-column justify-content-center align-items-center fs-1" data-bs-theme="dark">
                        <div class="row mt-5">
                              <span>Your cart is empty!</span>
                        </div>
                        <div class="row">
                            <img src="./images/empty-cart.gif" alt="This is not the photo you're looking for.">
                        </div>
                    </div>
        `
        cartHeader.appendChild(row);
    }
}

function populateCartTable(item, table){
    let row = document.createElement("tr");
    row.setAttribute("class", "text-center")
    let tdNum = document.createElement("td");
    let tdDish = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQty = document.createElement("td");
    let tdBtn = document.createElement("td");
    let emtyTd = document.createElement("td");
    emtyTd.setAttribute("colspan", "2");

    let subTotalRow = document.createElement("tr");
    subTotalRow.setAttribute("class", "trBody")
    subTotalRow.innerHTML = `<td colspan="2"><td/>
    <td class="fs-5" colspan="2">Item Total: ${formatMoney(item.quantity * menuItems[item.id -1].price)}</td>
    `


    //Remove item btn
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-secondary")
    btn.textContent = "Remove from Cart"
    btn.setAttribute("value", `${item.itemNum}`)
    btn.setAttribute("onclick", "removeItemFromCart(this)");
    tdBtn.appendChild(btn);
    tdBtn.setAttribute("class", "center-block")
    subTotalRow.appendChild(tdBtn);

    tdNum.textContent = item.itemNum;
    tdDish.textContent = menuItems[item.id - 1].name;
    tdPrice.textContent = formatMoney(menuItems[item.id -1].price);
    tdQty.textContent = item.quantity;
    row.appendChild(tdNum);
    row.appendChild(tdDish);
    row.appendChild(tdPrice);
    row.appendChild(tdQty);
    row.appendChild(emtyTd);
    table.appendChild(row);
    table.appendChild(subTotalRow);
}

function removeItemFromCart(btn){
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    let removed = false;
    let length = cart.length;
    for (i = 0; i < length; i++){
        if (cart[i].itemNum == btn.value && removed === false){
            cart.splice(i, 1);
            length -= 1;
            removed = true;
        }
        if (removed && cart[i]){
            cart[i].itemNum -= 1;
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    deleteCart();
    renderCart();
}

function deleteCart(){
    headerElement = document.getElementById("cartHeaderDivTarget");
    element = document.getElementById("cartTableTarget");
    element.remove();
    headerElement.remove();
}

function updateCart(){
    if (JSON.parse(sessionStorage.getItem("cart") == null)){
            document.getElementById("navCart").textContent = 0;
            return
    }
    if (JSON.parse(sessionStorage.getItem("cart")).length > 0){
    let cart = JSON.parse(sessionStorage.getItem("cart"))
    document.getElementById("navCart").textContent = cart.length;
    }
    else{
                    document.getElementById("navCart").textContent = 0;
    }
}

if (document.URL.includes("menu.html")){
    renderMenuDefault();
    document.getElementById("resetFilter").addEventListener("click", e =>{
    deleteMenu();
    renderMenuDefault();
    document.getElementById("categoryBtn").textContent = "Categories"
})
}

function renderMenuDefault(){
    renderMenu(menuItems)
}

function renderMenu(menu){
    menu.forEach(item =>{
        addRow(item.id, item.name, item.description, item.price, item.notes, item.category)
    })
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


function alert(message, type, time = null, container = document.getElementById("alertContainer"), button = true){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role="alert";
    alert.innerHTML= button ? `${message} <button type="button" class="btn-close" data-bs-dismiss="alert">` : `${message}`;
    container.appendChild(alert);

    if (time){
        setTimeout(()=>{
            alert.remove();
        },  time)
    }
}

function addRow(id, dish, description, price, notes, category){
    let htmlTable = document.getElementById("tbodyMenu");
    let dropdownList = document.getElementById("dropdownList")
    let row = document.createElement("tr");
    let tdDish = document.createElement("td");
    let tdDesc = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdNotes = document.createElement("td");
    let tdCategory = document.createElement("td");

    let notExists = true;

    if (dropdownList.children.length > 0){
        for (let item of dropdownList.children){
            if (item.children[0].getAttribute("value") === category){
                notExists = false;
            }
        }
    }
    if (notExists){
        let liCategory = document.createElement("li");
        let btnCategory = document.createElement("button");
        btnCategory.setAttribute("class", "dropdown-item");
        btnCategory.setAttribute("type", "button");
        btnCategory.setAttribute("value", `${category}`)
        btnCategory.setAttribute("onclick", "filter(this)")
        btnCategory.textContent=`${category}`;

        liCategory.appendChild(btnCategory);
        dropdownList.appendChild(liCategory)
    }

    tdDish.textContent = dish;
    tdDesc.textContent = description;
    tdPrice.textContent = formatMoney(price);
    tdNotes.textContent = notes;
    tdCategory.textContent = category;

    row.appendChild(tdDish);
    row.appendChild(tdDesc);
    row.appendChild(tdPrice);
    row.appendChild(tdNotes);
    row.appendChild(tdCategory);

    htmlTable.appendChild(row);
    createCheckoutRow(htmlTable, id);

    //<li><button class="dropdown-item" type="button" value="Action">Action</button></li>
}

function createCheckoutRow(table, id){

  // Create TR
  const tr = document.createElement("tr");
  tr.classList.add("trBody");

  // Create TD with colspan
  const td = document.createElement("td");
  td.setAttribute("colspan", "5");

  // Generate HTML for the control row
  td.innerHTML = `
    <div class="fluid-container">
      <div data-bs-theme="dark" class="row d-flex justify-content-end align-items-center">
        <div class="col-4 d-inline-flex justify-content-end">
          <div class="row align-items-center">
            <div class="col-auto fs-4">
              <label for="quantity${id}">Quantity</label>
            </div>
            <div class="col-auto fs-4 mt-2 mb-2">
              <input type="number" id="quantity${id}" min="1" max="5" value="1">
            </div>
            <div class="col-auto d-inline-flex">
              <button type="button" value="${id}" onclick="addToCart(this)" class="btn btn-primary fs-5">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append TD to TR, TR to table
  tr.appendChild(td);
  table.append(tr);
}

function deleteMenu(){
    tableBody = document.querySelector("tbody").children;
    for (let i = tableBody.length -1; i >= 0; i--){
        tableBody[i].remove();
    }
}

function formatMoney(item){
    const money = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD",
        minimumFractionDigits:0,
        maximumFractionDigits:2
    });
    return money.format(item);
}

function filter(btn){
    deleteMenu();
    renderMenu(menuItems.filter(item =>{
        return item.category === btn.value;
    }));
    categoryBtn = document.getElementById("categoryBtn")
    categoryBtn.textContent = btn.value;
}

function addToCart(btn){
    alertContainer = document.getElementById("menuAlertContainer");
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let dishId = btn.value;
    let qty = document.getElementById(`quantity${dishId}`);
    if (qty.value == 0){
        alert(`You can't order nothin! Must be somethin!`, "warning", 5000, alertContainer, false);
        qty.value = 1;
        return;
    }
    if (qty.value < 0){
        alert(`Anti-matter is not served at this location. Sorry!`, "warning", 5000, alertContainer, false);
        qty.value = 1;
        return
    }
    let num = cart.length +1;
    cart.push({itemNum: num, id: dishId, quantity: qty.value})
    qty.value = 1;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    alert(`${qty.value} of ${menuItems[dishId].name} added to card!`, "success", 5000, alertContainer, false);
}

function clearCartSuccess(){
    const confirmModal = document.querySelector('#staticBackdropOrderConfirm');
    const confirmShowModal = new bootstrap.Modal(confirmModal);
    clearCart();
    deleteCart();
    renderCart();
    confirmShowModal.show();
}

function clearCartModal(){
    const confirmModal = document.querySelector('#staticBackdropClearConfirm');
    const confirmShowModal = new bootstrap.Modal(confirmModal);
    clearCart();
    deleteCart();
    renderCart();
    confirmShowModal.show();
}

function navToMenu(){
        window.location.href = "menu.html";
}

function clearCart(){
    sessionStorage.setItem("cart", JSON.stringify([]));
    updateCart();
}
