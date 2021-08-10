// let clickregister = document.getElementsByClassName('clickreg')

function login(){
    fetch('https://flask-eomp-jesse.herokuapp.com/auth', {
    method: "POST",
    body: JSON.stringify({
        username: document.getElementById("lusername").value,
        content: document.getElementById("lpassword").value,
    }),
    headers: {
        'Content-type': '*',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
    });
    console.log(document.getElementById("lusername").value, document.getElementById("lpassword").value)
}

// fetch('https://flask-eomp-jesse.herokuapp.com/auth', {
//     method: "POST",
//     body: JSON.stringify({
//         username: document.getElementById("lusername"),
//         content: document.getElementsById("lpassword"),
//     }),
//     headers: {
//         'Content-type': '*',
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data));

// fetch('https://flask-eomp-jesse.herokuapp.com/auth', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({"username": "JesseT", "password": "MonkeyVillage"})
// })
// .then(res => res.json())
// .then(res => {
//         console.log(res);
//         myStorage = window.localStorage;
//         console.log(res["access_token"]);
//         myStorage.setItem("jwt-token", res["access_token"]);
// });

// let regdict = {
//     "email": document.querySelector("#remail").value,
//     "first_name":document.querySelector("#rfirstname").value,
//     "last_name":document.querySelector("#rlastname").value,
//     "address":document.querySelector("#raddress").value,
//     "username": document.querySelector("#rusername").value,
//     "password": document.querySelector("#rpassword").value
// }

// function register(){
//     fetch('https://flask-eomp-jesse.herokuapp.com/user-registration/', {
//         mode:'cors',
//       method: 'POST',
//       headers: {
//         'Content-type': '*',
//       },
//       body: JSON.stringify({
//           "email": document.querySelector("#remail").value,
//           "first_name":document.querySelector("#rfirstname").value,
//           "last_name":document.querySelector("#rlastname").value,
//           "address":document.querySelector("#raddress").value,
//             "username": document.querySelector("#rusername").value,
//             "password": document.querySelector("#rpassword").value
//         })
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
// }
