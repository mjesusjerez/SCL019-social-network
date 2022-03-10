import { bienvenida } from "./view/bienvenida.js"

const displayview = () => {
  document.getElementById('root').appendChild(bienvenida());
/*  window.location.hash = '/bienvenida'
window.addEventListener('hashchange', () => {
router(window.location.hash);  */
/* })}; */
//document.getElementById('root').innerHTML = 'holaholajesu'
}

window.addEventListener('load', displayview);