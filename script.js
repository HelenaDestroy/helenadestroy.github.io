//pasar a ingles
function cambioIdioma()
{ window.open(["index.html"],["Resumen, English version"]);
}

const ingles= document.getElementById("ingles");
ingles.addEventListener("click", cambioIdioma);
 
//volver a castellano
function cambioCastellano() { window.open(["index_e.html"],["Curriculum Vitae, Versión en Español"]);
}
const idioma = document.getElementById("castellano");
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

function openWa(){
    window.open(["https://api.whatsapp.com/message/NCKD5FFQ5UAWM1?autoload=1&app_absent=0"],["Open Whatsapp"]);
}
const wa = document.getElementById("whatsapp");
whatsapp.addEventListener("click", openWa);

