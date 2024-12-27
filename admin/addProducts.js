let form = document.getElementById("addProduct");
form.addEventListener("submit", selected)
let productCategory

function selected() {
    event.preventDefault();
    productCategory = form.productCategory.value;

    let productName = form.productName.value
    let description = form.description.value
    let image = form.image.value
    let rating = form.rating.value
    let price = parseInt(form.price.value)

    let obj = {
        productName,
        description,
        image,
        rating,
        price
    }

    if (productCategory == "Compression") {
        compressionCategory(obj)
    }
    if (productCategory == "Trackpants") {
        trackPantsCategory(obj)
    }
    if (productCategory == "Shorts") {
        shortsCategory(obj)
    }
    if (productCategory == "Vests") {
        vestCategory(obj)
    }
    if (productCategory == "T-Shirt") {
        tshirtCategory(obj)
    }
    if (productCategory == "Oversized") {
        overSizedCategory(obj)
    }
}

async function compressionCategory(obj) {
    await fetch("http://localhost:3000/Compression", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
async function trackPantsCategory(obj) {
    await fetch("http://localhost:3000/Trackpants", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

async function shortsCategory(obj) {
    await fetch("http://localhost:3000/Shorts", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

async function vestCategory(obj) {
    await fetch("http://localhost:3000/Vests", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
async function tshirtCategory(obj) {
    await fetch("http://localhost:3000/T-shirt", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
async function overSizedCategory(obj) {
    await fetch("http://localhost:3000/Oversized", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
}