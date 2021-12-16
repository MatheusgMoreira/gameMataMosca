var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search

nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    var criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    var criaMosquitoTempo = 1000
} else if (nivel === 'chuckNorris') {
    var criaMosquitoTempo = 750
}

//Ajusta o tamanho da tela de jogo
function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanho()

//Cronometro de jogo
var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0 ) {
        //faz com que o cronometro pare de funcionar ao vencer o jogo
        clearInterval(cronometro)
        clearInterval(criaMosca)

        //redireciona para  página de vitória
        window.location.href = 'vitoria.html'
    } else {
        //cronometro rodando
        document.getElementById('cronometro').innerHTML = tempo
    }
    

}, 1000)


//Posição da mosca
function posicaoRandomica() {

    //remove a mosca anterior
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosca'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)


}


//Define o tamanho da mosca
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1 '

        case 1:
            return 'mosquito2 '

        case 2:
            return 'mosquito3 '
    }
}

//Defino o lado da mosca
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}