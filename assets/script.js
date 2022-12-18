const dia = document.getElementById('days')
const hora = document.getElementById('hours')
const minuto = document.getElementById('minutes')
const segundo = document.getElementById('seconds')

const lancamento = "30 mar 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segundosTot = (dataLanc - hoje)/1000

    const finalDia = Math.floor(segundosTot / 60 / 60 / 24);
    const finalHor = Math.floor(segundosTot / 60 / 60) % 24;
    const finalMin = Math.floor(segundosTot / 60) % 60;
    const finalSeg = Math.floor(segundosTot) % 60;

    dia.innerHTML = formatoTempo(finalDia) + 'D'
    hora.innerHTML = formatoTempo(finalHor) + 'H'
    minuto.innerHTML = formatoTempo(finalMin) + 'M'
    segundo.innerHTML = formatoTempo(finalSeg) + 'S'
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)