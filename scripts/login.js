const mystorage = window.localStorage

function login(){
    fetch('https://js-backend.herokuapp.com/auth', {
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
        if (data['description'] == "Invalid credentials"){
            alert("Username or password is incorrect. Please enter correct details")
        }else{
            console.log(data['access_token'])
            mystorage.setItem('jwt-token', data['access_token'])
            mystorage.setItem('username', document.getElementById('lusername').value)
            window.location.href = "./products.html"
        }
    });
}

function register(){
    document.querySelector('.signupcontainer').classList.toggle('active')
}