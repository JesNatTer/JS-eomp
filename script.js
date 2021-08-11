// import {Cloudinary} from "./node_modules/cloudinary-core/cloudinary-core";

const mystorage = window.localStorage
// const cl = new Cloudinary({cloud_name: "dlqxdivje", secure: true});

function login(){
    fetch('https://flask-eomp-jesse.herokuapp.com/auth', {
    method: "POST",
    body: JSON.stringify({
        'username': document.getElementById("lusername").value,
        'password': document.getElementById("lpassword").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        console.log(data['access_token'])
        mystorage.setItem('jwt-token', data['access_token'])
        window.location.href = "./products.html"
    });
}

function register(){
    document.querySelector('.signupcontainer').classList.toggle('active')
}

fetch('https://flask-eomp-jesse.herokuapp.com/viewcatalogue')
.then(response => response.json())
.then(data => {
    console.log(data)
    data['data'].forEach((product) => {
        document.querySelector('.productscontainer').innerHTML += `
        <div class='product'>
            <img src='${product[5]}' alt='product img'></img>
            <div class='productdesc'>
                <h2 class='productprice'>R${product[4]}</h2>
                <h3 class='productheading'>${product[1]}</h3>
                <h4 class='producttype'>${product[2]}</h4>
            </div>
        </div>` 
    });
})

function addproduct(){
    document.querySelector('.addprocontainer').classList.toggle('active')
}

function addtocatalogue(){
    fetch("https://flask-eomp-jesse.herokuapp.com/addtocatalogue/", {
        method: 'POST',
        body: JSON.stringify({
            'product_id': document.getElementById("aid").value,
            'product_name': document.getElementById("aname").value,
            'product_type': document.getElementById("atype").value,
            'product_quantity': document.getElementById("aquantity").value,
            'product_price': document.getElementById("aprice").value,
            'product_image': document.getElementById("aimage").value,
        }),
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : `jwt ${mystorage.getItem('jwt-token')}`
        }
    }).then(response => response.json)
    .then(data => {
        console.log(data);
        console.log('success')})
}