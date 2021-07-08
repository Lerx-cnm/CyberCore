console.log("%cDid you expect something here? Trying to hack me? Well look at you now, you found this.", 'font-size: 24px; color: blue')
console.log('%cReally think I would give up this chance to call you an idiot? Idiot.', 'font-size: 18px; color: white')

document.addEventListener("DOMContentLoaded", event => {
    if(localStorage.logged_in == 'true'){
        handleHome()

    }else{
    entrancePage()
    }
});

function dataThing(){
    console.log("testing data 1")
}

function entrancePage() {
    let container = document.getElementById('c1')
    let username = document.createElement('input')
    let password = document.createElement('input')
    let loginb = document.createElement('button')
    let signup = document.createElement('button')

    signup.textContent= "Signup"
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
    container.appendChild(signup)

    loginb.addEventListener('click', event =>{
        loginHandle()
    })

    signup.addEventListener('click', event => {
        signupHandle()
    })
}

function signupHandle(){
    console.clear()
    const text = `Okay, so because Lowell made fun of me for making a signup page, I'm making you guys do this 'hard' way. But also, bro. This is CyberCore not CyberStupid so doing it this way should've been expected.\n\n`
    const text2 = `So basically what you're gonna do is called a fetch call, with this you're gonna send your stuff directly to the freakin server. But also, with that make sure that you got your info correct cus theres no way to change it lol\n\n`
    const text3 = `Okay, repeat after me(Shift+Enter for new line)(Also pull the console out so that you can see when to do new lines).\n\n
    let obj = {password: '<your_password>', username: '<your_username>', email: '<your_email>'}\n(enter)\n
    fetch('http://localhost:3000/users', {method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(obj)})
    .then(response => response.json())
    .then(json => {
        console.clear()
        console.log(json.resp))\n\n`
    const text4 = "So I was pretty sparse on the new lines and stuff, so it'll be pretty frustrating, jsut a word of advice for the entier fetch call and '.thens', you want to do only a Shift+Enter or else you'll submit it halfway"

    console.log(text, text2)
    console.log(`%c${text3}`, 'color: green' )
    console.log(text4)
    
    alert("you seriously thought it would be this easy?")
    document.body.innerHTML = "<h2>Which button?</h2>"
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')

    b1.textContent = "Button."
    b2.textContent = "Button."
    b3.textContent = "Button."
    b4.textContent = "Button."

    document.body.appendChild(b1)
    document.body.appendChild(b2)
    document.body.appendChild(b3)
    document.body.appendChild(b4)

    b3.addEventListener('click', event =>{
        alert("Bingoooo, good job. Open your Dev tools to the console, (you need chrome or brave to do this")
    })

    b1.addEventListener('click', event =>{
        alert('well, look at you. You picked the wrong one. Sucker. ')
    })

    b2.addEventListener('click', event =>{
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank').focus();
    })

    b4.addEventListener('click', event => {
        document.body.innerHTML = "<img class = gif src= src/best.gif>"
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
    .then(json => {
        if(json.state == true){
        localStorage.logged_in = true
        homePage()
    }else{
        handleLogout()
    }
})

}

function homePage(){
    // handleHome()
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