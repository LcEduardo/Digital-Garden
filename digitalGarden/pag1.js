function mostrarSeta() {
    let seta = document.getElementById("seta")
    setTimeout(function() {
        seta.style.display = "inline"
    }, 200);
    
}

function ocultarSeta() {
    let seta = document.getElementById("seta")
    setTimeout(function() {
        seta.style.display = "none"
    }, 200);
}