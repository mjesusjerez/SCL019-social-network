
import { register } from "./register";
import { Bienvenida } from "./bienvenida";
import { logIn } from "./login";
import { router } from "./router";

const displayview = () =>{
 document.getElementById('root').appendChild(Bienvenida());
 window.location.hash = '/bienvenida'
window.addEventListener('hashchange', () =>
router(window.location.hash)
)};

window.addEventListener('load', displayview() );

