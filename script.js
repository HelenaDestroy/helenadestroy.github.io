//pasar a ingles
const ingles= document.getElementById("ingles");
ingles.addEventListener("click", cambioIdioma);
function cambioIdioma()
{ window.open(["index.html"],["Resumen, English version"]);
}
 
//volver a castellano
function cambioCastellano() { window.open(["index_e.html"],["Curriculum Vitae, Versión en Español"]);
}
const castellano = document.getElementById("castellano");
castellano.addEventListener("click", cambioCastellano);

//download button

function downloadResume(){
window.open(["https://drive.google.com/file/d/1fHT5KUuwSanXdj1oKAfVO5EjcBgJSJOM/view?usp=sharing"],["Resume for Download"]);


const botond = document.getElementById("download");
download.addEventListener("click", downloadResume);
}
//boton de descarga
const botonm = document.getElementById("bajar");
bajar.addEventListener("click", bajarResume);
function bajarResume(){
    window.open(["https://drive.google.com/file/d/1wBJsgHX_G6BJ2YwDxxdz-GdV0pFUXbMn/view?usp=sharing"],["Resume for Download"]);
}

//whatsapp
function openWa(){
    window.open(["https://api.whatsapp.com/message/NCKD5FFQ5UAWM1?autoload=1&app_absent=0"],["Open Whatsapp"]);
}
const wa = document.getElementById("whatsapp");
whatsapp.addEventListener("click", openWa);


//ver proyectos 
function seeProjects(){
window.open(["projects.html"],["Open Projects' page"]);
}
const project = document.getElementById("projects");
projects.addEventListener("click", seeProjects);

function verProyectos(){
    window.open(["proyectos.html"],["Abrir la página de Proyectos"]);
    }
const proyecto = document.getElementById("proyectos");
proyectos.addEventListener("click", verProyectos);