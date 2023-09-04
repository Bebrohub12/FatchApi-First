let main = document.querySelector(".main")


window.onload = () => {
    fetch("https://fakestoreapi.com/products")
        .then((resp) => { return resp.json() })
        .then((result) => { console.log(result); shresult(result) })
}


function shresult(result) {

    result.forEach((product) => {

        let div = document.createElement("div")
        let img = document.createElement("img")
        div.style.height=500+"px"
        div.style.width=500+"px"
        img.style.height=100+"%"
        // img.style.width=100+"%"
        


        img.src = product.image
        div.append(img)

        main.append(div)

        let title = document.createElement("h3")
        title.innerHTML = product.title
        div.append(title)

        let price = document.createElement("p")
        price.innerHTML = product.price
        div.append(price)







    })





}