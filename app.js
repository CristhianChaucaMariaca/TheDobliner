window.addEventListener('load',inicio);
function inicio(){
    ocultarload();
}
function ocultarload(){
    let load = document.getElementById('preloading')
    load.classList.add('ocultar');
    load.style.display="none";
}