// c
// detailsBtn

let detailsButton = document.getElementById("detailsBtn");
detailsButton.addEventListener("click", getProductsDetails)

let updatePrddDel = document.getElementById("updateProd");
updatePrddDel.addEventListener("submit", updateProDet)

let getDel = document.getElementById("getDel")
let categoryType;
let inputText;
async function getProductsDetails() {

    event.preventDefault()
    categoryType = getDel.categoryType.value;
    inputText = document.getElementById("inputText").value


    if (categoryType == "Compression") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);

    }
    if (categoryType == "Trackpants") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);
    }
    if (categoryType == "Shorts") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);
    }
    if (categoryType == "Vests") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);
    }
    if (categoryType == "T-shirt") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);
    }
    if (categoryType == "Oversized") {
        let data = await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`)
        let actualData = await data.json();
        mapData(actualData);
    }
}
function mapData(obj) {
    let productName = updatePrddDel.productName.value = obj.productName
    let description = updatePrddDel.description.value = obj.description
    let image = updatePrddDel.image.value = obj.image
    let rating = updatePrddDel.rating.value = obj.rating
    let price = updatePrddDel.price.value = obj.price
}
async function updateProDet() {

    let productName = updatePrddDel.productName.value
    let description = updatePrddDel.description.value
    let image = updatePrddDel.image.value
    let rating = updatePrddDel.rating.value
    let price = parseInt(updatePrddDel.price.value)

    let updateObj = {
        productName,
        description,
        image,
        rating,
        price
    }
    await fetch(`http://localhost:3000/${ categoryType }/${ inputText }`, {
        method: "PUT",
        body: JSON.stringify(updateObj),
        headers: {
            "Content-Type": "application/json"
        }
    })

}