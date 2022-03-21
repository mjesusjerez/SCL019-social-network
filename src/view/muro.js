
export const wall = () =>{

window.location.hash = '#/wall'

   const containerwall = document.createElement('div')
   containerwall.setAttribute('class', 'containerwall')
   containerwall.setAttribute('id', 'containerwall')


   const wallV =document.createElement('div');
    
    
   const wallView = `<div class="containerMuro" id="containerMuro">
    <header class="encabezadoMuro" id="encabezadoMuro">
     <img src="https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png" id="logoMuro" class="logoMuro"> 
     <button class="logOut" id="btnLogOut"><i class="fa-solid fa-power-off"></i> </button>
    </header>
    <div class="mainPost" id="mainPost">
    
    <section class="containerPost" id="containerPost">
    <form id="task-form" class="task-form">
     <label for="title"> Titulo: </label>
     <input type="text" class="taskTittle" id="task-title">
     
     
     <br>
     <label for="title"> Descripción: </label>
     <textarea class="taskDescription" id="task-description" cols="30" rows="6"></textarea>
     <br>
   
     
     <button id="btnTask" class="btnTask"> Postear </button>
     </form>
     <div class="containerTask" id="containerTask"></div>
   
     <div >
       <h3></h3>
       <p></p>
    </div>
    </section>
    </div>
     
     
     
     </div>`;
 
    wallV.innerHTML=wallView



















}