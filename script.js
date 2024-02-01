function tempoDecorrido() {
    let mostraData = document.getElementById('data')

    let dataDeCriacao = new Date('2024-01-01')

    let dataAtual = new Date();

    let diferencaEmMilissegundos = dataAtual - dataDeCriacao;

    let diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24))

    mostraData.innerHTML = `${diferencaEmDias}`;

    return diferencaEmDias
}

function plantacao(){
    var imagem = document.createElement('img');
    let container = document.getElementById('img');
    let tempo = tempoDecorrido();

    if( tempo < 60){
        imagem.src = "imagens/planta-1.jpg"
        imagem.alt = 'desenho de uma semente de planta'
        container.appendChild(imagem);
    }
}

tempoDecorrido()

document.addEventListener('DOMContentLoaded', function () {
    plantacao();
});