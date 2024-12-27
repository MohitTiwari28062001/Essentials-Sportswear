
let container = document.getElementById("tshirtContainer");


let form = document.getElementById("sortVestForm")
form.addEventListener("submit", sortme)
let sortedProdContainer = document.getElementById("sortedProductContainer");




async function sortme() {
    event.preventDefault()
    let inpbox = form.price.value
    let option = form.option.value

    let data = await fetch(`http://localhost:3000/T-shirt?price${ option }=${ inpbox }`)
    let actualData = await data.json()

    actualData.forEach(sotedProducts)
}

function sotedProducts(obj) {
    let cardDiv = document.createElement('div')
    cardDiv.setAttribute("class", "cardDiv")

    let cardImage = document.createElement('img')
    cardImage.src = obj.image;
    cardImage.setAttribute("class", "cardImage")


    let cardTitle = document.createElement('p')
    cardTitle.setAttribute("class", "cardTitle")
    cardTitle.innerText = obj.productName;

    let cardDescription = document.createElement('p')
    cardDescription.setAttribute("class", "cardDescription")
    cardDescription.innerText = obj.description;


    let cardRating = document.createElement("p")
    cardRating.setAttribute("class", "cardRating")
    cardRating.innerText = "★" + obj.rating;

    let cardPrice = document.createElement("p")
    cardPrice.setAttribute("class", "cardPrice")
    cardPrice.innerText = "Rs " + obj.price;

    let prDiv = document.createElement("div")
    prDiv.setAttribute("class", "prDiv")
    prDiv.append(cardRating, cardPrice)

    cardDiv.append(cardImage, cardTitle, cardDescription, prDiv);
    sortedProdContainer.append(cardDiv)
}
async function getData() {
    let data = await fetch("http://localhost:3000/T-shirt");
    let actData = await data.json()
    actData.forEach(printData)
}

getData();

function printData(ele, ind, arr) {
    cardContainer(ele);

}

function cardContainer(obj) {
    let cardDiv = document.createElement('div')
    cardDiv.setAttribute("class", "cardDiv")

    let cardImage = document.createElement('img')
    cardImage.src = obj.image;
    cardImage.setAttribute("class", "cardImage")


    let cardTitle = document.createElement('p')
    cardTitle.setAttribute("class", "cardTitle")
    cardTitle.innerText = obj.productName;

    let cardDescription = document.createElement('p')
    cardDescription.setAttribute("class", "cardDescription")
    cardDescription.innerText = obj.description;


    let cardRating = document.createElement("p")
    cardRating.setAttribute("class", "cardRating")
    cardRating.innerText = "★" + obj.rating;

    let cardPrice = document.createElement("p")
    cardPrice.setAttribute("class", "cardPrice")
    cardPrice.innerText = "Rs " + obj.price;

    let prDiv = document.createElement("div")
    prDiv.setAttribute("class", "prDiv")
    prDiv.append(cardRating, cardPrice)

    cardDiv.append(cardImage, cardTitle, cardDescription, prDiv);
    container.append(cardDiv)
}