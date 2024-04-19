const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//laco de repeticao
for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-02-02T00:00:00");
const tempoObjetivo2 = new Date("2024-02-02T00:00:00");
const tempoObjetivo3 = new Date("2024-02-02T00:00:00");
const tempoObjetivo4 = new Date("2024-02-02T00:00:00");


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
   
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if(tempofinal>0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    }else{
        return"PRAZO ENCERRADO!!!"
    }
}
function atualizaCronometro(){
    //laço de repetição para interagir com todos os objetivos
    for(let i = 0; 1 < contadores.length; 1++){
        contadores[i].textContent = calculaTempo(tempos[i]); //textContent mostra na tela a meta
    }
}
function comecaCronometro(){
    atualizaCronometro(); //chamada da função criada anteriormente dentro desta função
    setInterval(atualizaCronometro, 1000); //função que faz a contagem do tempo a cada seg.
}
comecaCronometro(); //chamada da função que inicia o cronometro

