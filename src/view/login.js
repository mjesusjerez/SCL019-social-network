/* export const logIn = () => {

window.location.hash = '/login'; 

const header = document.getElementById("header");
const root = document.getElementById("root");
  
    let headerdiv = document.createElement("div")
    let logo = document.createElement("img")
    
  
    headerdiv.setAttribute("class", "headerdiv")
    logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
    logo.setAttribute("class", "logo")
    
    header.appendChild(headerdiv)
    headerdiv.appendChild(logo)
    
  
    //
  
    let formlogin = document.createElement("form")
    formlogin.setAttribute("class", "login")
    root.appendChild(formSignUp)
  
    let emailInput = document.createElement("input")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("class", "email")
    emailInput.setAttribute("placeholder", "ejemplo@email.com")
    formlogin.appendChild(emailInput)
  
    let passwordInput = document.createElement("input")
    passwordInput.setAttribute("type", "password")
    passwordInput.setAttribute("class", "password")
    passwordInput.setAttribute("placeholder", "contraseña")
    formlogin.appendChild(passwordInput)
  
    let buttonlogin = document.createElement("input")
    buttonlogin.setAttribute("type", "submit")
    buttonlogin.setAttribute("value", "Login")
    buttonlogin.setAttribute("class", "buttonlogin")
    buttonlogin.setAttribute('id', 'buttonlogin')
    formlogin.appendChild(buttonlogin)


    document.getElementById('buttonlogin').addEventListener('click', logIn)
    

  }; */