const frases = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]

const button = document.querySelector("button")
const EL_pergunta_preview = document.querySelector("#pergunta-preview")
const EL_resposta = document.querySelector("#resposta")



function fazerPergunta() {
    
    const pergunta = document.querySelector("#pergunta").value

    if (pergunta == "") {
        opacidadeMaxima()
        EL_pergunta_preview.innerHTML = ""
        EL_resposta.innerHTML = `<span style="color:red">Faça uma pergunta para começar.</span>`
        return
    }

    opacidadeMaxima()
    button.setAttribute("disabled", true)

    const num_aleatorio = Math.floor(Math.random() * frases.length)
    
    EL_pergunta_preview.innerHTML = "🤔: " + pergunta
    EL_resposta.innerHTML = "🧙‍♂️: " + frases[num_aleatorio]

    setTimeout(function() {
        opacidadadeMinima()
        button.removeAttribute("disabled")
    }, 3000)
    
}



function opacidadeMaxima() {
    EL_pergunta_preview.style.opacity = 1
    EL_resposta.style.opacity = 1
}

function opacidadadeMinima() {
    EL_pergunta_preview.style.opacity = 0
    EL_resposta.style.opacity = 0
}