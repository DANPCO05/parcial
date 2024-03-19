let chbox = document.querySelector('.checkbox');
let body = document.body;

chbox.addEventListener('change', function(){
    if (this.checked) {
        body.setAttribute('style', 'background-color:black;color:white;');
    } else {
        body.setAttribute('style', 'background-color:white;color:black;');
    }
});

function cambiarTexto() {
    var elemento = document.getElementById("texto");
    if (elemento.innerHTML === "p") {
        elemento.innerHTML = "Nuevo Texto";
    } else {
        elemento.innerHTML = "Texto Original";
    }
}
