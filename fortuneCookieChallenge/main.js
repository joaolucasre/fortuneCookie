const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnFortune = document.querySelector("#btnFortune")
const btnReset = document.querySelector("#btnReset")
const fortuneText = document.querySelector(".fortune p")
const fortuneWords = [
    "Acredite em si mesmo e em tudo que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é capaz de conquistar aquilo que acredita.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "A jornada de mil milhas começa com um único passo.",
    "A persistência é o caminho do êxito.",
    "Se você acredita, você pode.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
    "A perseverança é a mãe da boa sorte."
  ];
let randomWord = Math.floor(Math.random() * fortuneWords.length)

//Eventos
btnFortune.addEventListener('click', handleFortuneClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//funções callback
function handleFortuneClick (event) {
    event.preventDefault() // preventDefault = não realizar o padrão do evento

    randomWord
    const fortuneWord = fortuneWords[randomWord]
    fortuneText.textContent = fortuneWord

    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
    randomWord = Math.floor(Math.random() * fortuneWords.length)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}