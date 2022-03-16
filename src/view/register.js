import { logIn } from "../view/login.js";

export const register = () => {

  window.location.hash = '#/register';

  const divregister = document.createElement("div");
  const divsignup = document.createElement("div");
  
  let headerdiv = document.createElement("div")
  let logo = document.createElement("img")
    
  
  headerdiv.setAttribute("class", "headerdiv")
  divregister.setAttribute("class", "divregister")
  logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
  logo.setAttribute("class", "logo")
  
  divregister.appendChild(headerdiv)
  headerdiv.appendChild(logo)
  divregister.appendChild(divsignup)
  
 

  //

  let formSignUp = document.createElement("form")
  formSignUp.setAttribute("class", "signup")
  divsignup.appendChild(formSignUp)

  let emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("class", "email")
  emailInput.setAttribute("placeholder", "ejemplo@email.com")
  formSignUp.appendChild(emailInput)

  let passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("class", "password")
  passwordInput.setAttribute("placeholder", "contraseña")
  formSignUp.appendChild(passwordInput)

  let buttonregister = document.createElement("input")
  buttonregister.setAttribute("type", "submit")
  buttonregister.setAttribute("value", "Regístrate")
  buttonregister.setAttribute("class", "register")
  buttonregister.setAttribute('id', 'register')
  formSignUp.appendChild(buttonregister)


  let logintext = document.createElement('p')
  logintext.setAttribute('class', 'logintext')
  logintext.innerHTML = '¿Ya tienes una cuenta?'
  divregister.appendChild(logintext)

  const logbuttonin = document.createElement('button')
  logbuttonin.setAttribute('type', 'button')
  logbuttonin.setAttribute('class', 'logbuttonin')
  logbuttonin.setAttribute('id', 'logbuttonin')
  logbuttonin.innerHTML = 'Ingresar'
  divregister.appendChild(logbuttonin)

  let buttonl = divregister.querySelector('#logbuttonin')
  buttonl.addEventListener('click', () =>{
    logIn()
  })

  return divregister;

};