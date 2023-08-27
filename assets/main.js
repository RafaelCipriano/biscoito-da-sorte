//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const buttonOpenCookie = document.querySelector('#open-cookie')
const buttonOpenAnotherCookie = document.querySelector('#open-another')
const phrases = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Procure acender uma vela em vez de amaldiçoar a escuridão.',
    'Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo.',
    'O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos.',
    'Em um mundo cheio de adversidades, quem não desiste sempre sairá como vencedor no final.'
]
let randomPhrase = 0;

//Eventos
buttonOpenCookie.addEventListener('click', openCookie)
buttonOpenAnotherCookie.addEventListener('click', openAnotherCookie)

//Funções
function checkIfRandomPhrasesAreOver() {
    if(randomPhrase >= phrases.length)
        randomPhrase = 0
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function openCookie() {
    toggleScreen()
    checkIfRandomPhrasesAreOver()
    document.querySelector('.screen2 p').innerText = phrases[randomPhrase]
}

function openAnotherCookie() {
    toggleScreen()
    randomPhrase++
}