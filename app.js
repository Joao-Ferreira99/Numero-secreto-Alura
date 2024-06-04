let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}
function mensagemInicial(){

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else{
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        tentativas ++;
        limparCampo();
   }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
   
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
