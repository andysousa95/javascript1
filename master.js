function escreve(nome, vezes) {
  var conteudo = document.getElementById('conteudo');
  for (var i = 0; i < vezes; i++) {
    var elemento = document.createElement('li');
    elemento.appendChild(document.createTextNode(nome));
    if (i >= 7) {
      elemento.appendChild(document.createTextNode(' top'));
    } else if (i % 2 === 0) {
      elemento.appendChild(document.createTextNode(' melhor'));
    } else {
      elemento.appendChild(document.createTextNode(' amo'));
    }
    conteudo.appendChild(elemento);
  }
}
