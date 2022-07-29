const form = document.querySelector('form');
form.onsubmit = (e) => {
  e.preventDefault()
  console.log('submitted')
  getmakeup()
}

let div = document.getElementById('result');
div.innerHTML = ` <div id ="brand"></div> 
 <img  id="img" src="" alt="" srcset="" class='img-container'>
 <div id = "name"></div>
 <div id = "price"></div>
 <div id = "productlink"></div>
<div id = "description"></div>
 <div id = "websitelink"></div>`;
div.style.textAlign = "center"
document.body.append(div);

// let searchButton = document.getElementById("searchbtn");
//     searchButton.addEventListener('click', getmakeup);
    // function searchtext(){
    //     console.log("searchtext");
    //     getmakeup()
    // }

    async function getmakeup() {
        let searchProducts = document.getElementById("search").value;
        let response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`);
        let res1 = await response.json();
        console.log(res1);
        let result = res1.filter((value) => (value.name ==`${searchProducts}` || value.brand ==`${searchProducts}`));
        console.log(result);

        for(let i=0;i<result.length; i++)
        {
        document.getElementById("brand").innerText = `Brand Name : ${result[i].brand}`;
        document.getElementById("img").src = `${result[i].image_link}`;      
        document.getElementById("name").innerText = `Product Name : ${result[i].name}`;
        document.getElementById("price").innerText = `Price : $ ${result[i].price}`;
        document.getElementById("productlink").innerText = `Product link : ${result[i].product_link}`;
        // document.getElementById("description").innerText = `Description : ${result[i].description}`;
        document.getElementById("websitelink").innerText = `Website link : ${result[i].websitelink}`;
        }
    }
