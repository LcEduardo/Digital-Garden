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

function mostrarTooltip() {
    let tooltip = document.getElementById('tooltip')
    tooltip.innerHTML = 'Ideias que reservei e trabalhei um pouco'

    tooltip.style.display = 'block'
}

function ocultarTooltip() {
    let tooltip = document.getElementById('tooltip')
    tooltip.style.display = 'none'
}