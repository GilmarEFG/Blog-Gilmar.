let curtidas = 0;
let descurtidas = 0;

const botaoCurtir = document.getElementById("botao-curtir");
const contadorCurtidas = document.getElementById("contador-curtidas");
const botaoDescurtir = document.getElementById("botao-descurtir");
const contadorDescurtidas = document.getElementById("contador-descurtidas");

if (botaoCurtir) {
  botaoCurtir.addEventListener("click", function () {
    curtidas++;
    contadorCurtidas.textContent = curtidas + (curtidas === 1 ? " curtida" : " curtidas");
    botaoCurtir.textContent = "Curtido";
  });
}

if (botaoDescurtir) {
  botaoDescurtir.addEventListener("click", function () {
    descurtidas++;
    contadorDescurtidas.textContent = descurtidas + (descurtidas === 1 ? " descurtida" : " descurtidas");
    botaoDescurtir.textContent = "Descurtido";
  });
}
