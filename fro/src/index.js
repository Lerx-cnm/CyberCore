let logged_in = false;

document.addEventListener("DOMContentLoaded", event => {
    entrancePage()
});

// const rmCheck = document.getElementById("rememberMe"),
//     emailInput = document.getElementById("email");

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rmCheck.setAttribute("checked", "checked");
//   emailInput.value = localStorage.username;
// } else {
//   rmCheck.removeAttribute("checked");
//   emailInput.value = "";
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = rmCheck.value;
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//   }
// }
function entrancePage() {
    let container = document.getElementById('c1')
    let username = document.createElement('input')
    let password = document.createElement('input')
    let loginb = document.createElement('button')
    let check = document.createElement('input')
    let label = document.createElement('label')

    label.textContent = 'Remember me'
    label.htmlFor = 'check'
    check.type = 'checkbox'
    check.id = 'check'
    container.innerHTML += '<h1>CyberCore</h1>'
    username.placeholder = 'username'
    username.id = 'user'
    password.placeholder = 'password'
    password.type = 'password'
    password.id = 'password'
    loginb.textContent = 'Login'

    container.appendChild(username)
    container.appendChild(password)
    container.appendChild(loginb)
    container.appendChild(check)

    loginb.addEventListener('click', event =>{
        loginHandle()
    })
}

function loginHandle() {
    let user = document.getElementById('user').value
    let pass = document.getElementById('password').value
    let obj = {username: user, password: pass}
    fetch('http://localhost:3000/users/', {method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(json =>{
        handError(json)
        }
    )
}

function handError(json){
    if (json.error){
        document.body.innerHTML += `<p style='color:red'>${json.error}</p>`
    }else{
        handleHome()
    }
}

function handleHome(){
    
}