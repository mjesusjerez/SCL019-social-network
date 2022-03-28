import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { onSnapshot } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"

export const wall = () =>{

window.location.hash = '#/wall'

   const containerwall = document.createElement('div')
   const headerwall = document.createElement('div')

   containerwall.setAttribute('class', 'containerwall')
   containerwall.setAttribute('id', 'containerwall')
   headerwall.setAttribute('class', 'headerwall')
   headerwall.setAttribute('id', 'headerwall')

   let logo = document.createElement("img")
   logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
   logo.setAttribute("class", "logo")

   const botonLogOut = document.createElement("button")
   botonLogOut.setAttribute('type', 'button')
   botonLogOut.setAttribute('class', 'fa fa-sign-out')
   botonLogOut.setAttribute('id', 'botonLogOut')
  
   containerwall.appendChild(headerwall)
   headerwall.appendChild(logo)
   headerwall.appendChild(botonLogOut)

   //

   let formWall = document.createElement("form")
   formWall.setAttribute("class", "muro")
   headerwall.appendChild(formWall)

   let postInput = document.createElement("input")
   postInput.setAttribute("type", "text")
   postInput.setAttribute("class", "postinput")
   formWall.appendChild(postInput)

   let botonPosteo = document.createElement("button")
   botonPosteo.setAttribute("type", "submit")
   botonPosteo.setAttribute("class", "botonposteo")
   formWall.appendChild(botonPosteo)
   botonPosteo.innerHTML = "Postear"

   let botonSalir = containerwall.querySelector('#botonLogOut');
   console.log(botonSalir)
    botonSalir.addEventListener('click', () => {
     logOut();
    });


 return containerwall;

}

const auth = getAuth();

  // CERRAR SESION

   function logOut() {
    signOut(auth).then(() => {
      alert("Estas cerrando sesión, nos vemos pronto :)");
      window.location.hash = '#/bienvenida';
    }).catch((error) => {
      // An error happened.
    });
  };
