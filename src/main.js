import { bienvenida } from "./view/bienvenida.js"
import { router } from "./lib/router.js"; 

window.addEventListener('load', () => {
    router(window.location.hash)
})

window.location.hash = '#/bienvenida';
  window.addEventListener('hashchange', () =>{
    router(window.location.hash)
  })





 