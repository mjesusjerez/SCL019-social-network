 import { bienvenida } from "../view/bienvenida.js";
import { logIn } from "../view/login.js";
import { register } from "../view/register.js";

export function router (){

    const root = document.getElementById('root');
       root.innerHTML = ''

      if (window.location.hash === '#/bienvenida'){
        root.appendChild(bienvenida());
    }  

    if (window.location.hash === '#/login'){
        root.appendChild(logIn());
    }

    if (window.location.hash === '#/register'){
        root.appendChild(register());
    }

}; 