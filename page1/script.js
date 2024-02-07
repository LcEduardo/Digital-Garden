function contador(){
    var listaTop = document.getElementById("top");
    var itensDaListaTop = listaTop.getElementsByClassName("topic");
    var numeroDeItensTop = itensDaListaTop.length;
    var contadorDiv = document.getElementById("contador");
    
    contadorDiv.textContent = numeroDeItensTop;
}

contador();