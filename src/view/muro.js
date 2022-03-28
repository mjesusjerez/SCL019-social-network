import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { guardarPost, likePost } from "../lib/firebase.js";
import { onSnapshot,query, orderBy, collection } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

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

   let containerpost = document.createElement ('div') // container de todos los post
   containerpost.setAttribute('id', 'containerpost')
   containerpost.setAttribute('class', 'containerpost')
   containerwall.appendChild(containerpost)

   let postindiv = document.createElement('div') // div para cada post
   postindiv.setAttribute('id', 'postindiv')
   postindiv.setAttribute('class', 'postindiv')
   containerpost.appendChild(postindiv)

   let contenido = document.createElement('p')  // contenido post
   contenido.setAttribute('id','contenido')
   contenido.setAttribute('class', 'contenido')
   postindiv.appendChild(contenido)


  //botón logout
   let botonSalir = containerwall.querySelector('#botonLogOut');
   console.log(botonSalir)
    botonSalir.addEventListener('click', () => {
     logOut();
    });


 return containerwall;




//FUNCION MOSTRAR POST

const postcontainer = containerwall.querySelector('#contenido')

async function mostrarpost(){

  const qry = query(collection(gFs, "publicaciones"), orderBy("date","desc"))
  onSnapshot (qry, (querySnapshot) => {
    wall.innerHTML = ''

    querySnapshot.forEach(doc=>{
    
      const post = doc.data();

      const userId = getAuth().currentUser.uid

      if (post.userId == userId){
      html+=`
              <div class="post1">
               <h2 class="nombreUsuario"> ${post.name}</h2>
              <textarea class="comentario" readonly>${post.descripcion}</textarea>
              <div class="btnsPost">
                 <input class="contador" id="contador" type="number"  value="${task.likeCounter}" name="" readonly /> 
                 <button class="heart"  value=${doc.id} ><i class="fa-regular fa-heart"></i></button> 
                 <button class="btnDelete" data-id="${doc.id}">Borrar</button>
                 <button class="btnEdit" data-id="${doc.id}">Editar</button>
                 </div>
          
              </div>
              </div>`

     


    }
    else{

      html+=`
              <div class="post1">
              <h2 class="nombreUsuario"> ${post.name}</h2>
                <textarea class="comentario" readonly>${post.descripcion}</textarea>
                 <div class="btnsPost">
                 <input class="contador" id="contador" type="number"  value="${task.likeCounter}" name="" readonly /> 
                 <button class="heart"  value=${doc.id} ><i class="fa-regular fa-heart"></i></button> 
                 </div>
          
              </div>
              </div>`
    }
    
    
    
    
    
  })
  
  })

  containerPost.innerHTML = html

}










  // FUNCIÓN CERRAR SESION
  const auth = getAuth();

   function logOut() {
    signOut(auth).then(() => {
      alert("Estas cerrando sesión, nos vemos pronto :)");
      window.location.hash = '#/bienvenida';
    }).catch((error) => {
      // An error happened.
    });
   }

   
    
}
