import { bienvenida } from "./view/bienvenida.js"
// import { logIn } from "./view/login.js"
// import { register } from "./view/register.js"

const displayview = () => {
document.getElementById('root').appendChild(bienvenida());
/*  window.location.hash = '/bienvenida'
window.addEventListener('hashchange', () => {
router(window.location.hash);  */
/* })}; */
}

window.addEventListener('load', displayview);