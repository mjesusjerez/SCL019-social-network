// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */

// import {register} from "./firebase"

const header = document.getElementById("header");
const root = document.getElementById("root");

  let headerdiv = document.createElement("div")
  let logo = document.createElement("img")
  let topFlower = document.createElement("img")

  headerdiv.setAttribute("class", "headerdiv")
  logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
  logo.setAttribute("class", "logo")
  topFlower.setAttribute("class", "topFlower")
  topFlower.setAttribute("src", "https://64.media.tumblr.com/e18b8acf6151e278ddff601b9da7c75f/2c7d13e6f817310a-bb/s1280x1920/2c6334acc7b4a46ee4a60a60ef4e3cc60740536f.png")
  
  header.appendChild(topFlower)
  header.appendChild(headerdiv)
  headerdiv.appendChild(logo)
  

  //

  let formSignUp = document.createElement("form")
  formSignUp.setAttribute("class", "signup")
  root.appendChild(formSignUp)

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
  formSignUp.appendChild(buttonregister)
  
