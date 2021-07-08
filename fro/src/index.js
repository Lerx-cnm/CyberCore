
document.addEventListener("DOMContentLoaded", event => {
    if(localStorage.logged_in == 'true'){
        homePage()
    }else{
    entrancePage()
    }
});

function dataThing(){
    console.log("testing data 1")
}

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
    let label = document.createElement('label')

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
        localStorage.access = json.key
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
    fetch('http://localhost:3000/users', {method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({login_key: localStorage.access})}
    ).then(response => response.json())
    .then(json => console.log(json))
    homePage()
}

function homePage(){
    document.body.innerHTML = "<h1>Welcome home</h1>"
    let div1 = document.createElement('div')
    div1.className = "div1"
    let logout = document.createElement('button')
    logout.textContent = "logout"
    document.body.append(div1)
    div1.appendChild(logout)

    logout.addEventListener('click', event =>{
        handleLogout()
    })

}

function handleLogout(){
    localStorage.logged_in = false;
    localStorage.access = ""
    location.reload()
    // alert("you're logged out")
}