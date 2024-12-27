let deleteProducts = document.getElementById("deleteProducts")
deleteProducts.addEventListener("submit", delProducts)

let categoryType;
let productID;

async function delProducts() {
    event.preventDefault()

    categoryType = document.getElementById("categoryType").value
    productID = document.getElementById("productID").value

    await fetch(`http://localhost:3000/${ categoryType }/${ productID }`, {
        method: "DELETE"
    });

}
