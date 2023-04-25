//const codigo = "LE288484023SE"
const exit = document.querySelector("#exit")

const formCodigo = document.querySelector("#form-login")

formCodigo.addEventListener("submit", (e) => {
    e.preventDefault()

    const codigo = document.querySelector("#codigoInput")

    const url = `https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${codigo.value}`
    console.log(codigo.value)

    getRastreamento(url)
})


async function getRastreamento(url) {

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    tratamentoDeDados(data)
}

function tratamentoDeDados(data) {

    const servicoCodigo = document.querySelector(".servicoCodigo")
    const eventosTela = document.querySelector(".eventos")
    const sectionHTML = document.querySelector("#sectionConteudo").style

    //Codigo de Ratreio
    let titulo = document.createElement("h3")
    let servico = document.createElement("h3")
    titulo.innerText = `Código: ${data.codigo}`
    servico.innerText = `Serviço: ${data.servico}`
    servicoCodigo.appendChild(titulo)
    servicoCodigo.appendChild(servico)

    sectionHTML.visibility = "visible"

    /*
    let div = document.createElement("div")
    let dataHora = document.createElement("h3")
    let local = document.createElement("h3")
    let status = document.createElement("h3")

    status.innerText = `Status: Aguardando Retirada`
    dataHora.innerText = `Data: 02/03/2023 | Hora: 20:00`
    local.innerText = `Local: Raposa-MA`
        
    div.appendChild(status)
    div.appendChild(local)
    div.appendChild(dataHora)

    eventosTela.appendChild(div)
    div.classList.add("conteudoDiv")
    */

    let dadosDeEventos = data.eventos
    dadosDeEventos.map((rastreamento) => {

        let div = document.createElement("div")
        let dataHora = document.createElement("h3")
        let local = document.createElement("h3")
        let status = document.createElement("h3")

        status.innerHTML = `Status: <strong>${rastreamento.status}</strong>`
        dataHora.innerText = `Data: ${rastreamento.data} | ${rastreamento.hora}`
        local.innerText = `Local: ${rastreamento.local}`
        
        div.appendChild(status)
        div.appendChild(local)
        div.appendChild(dataHora)

        eventosTela.appendChild(div)
        div.classList.add("conteudoDiv")
    })
}

exit.addEventListener("click", () => {
    const sectionHTML = document.querySelector("#sectionConteudo").style
    sectionHTML.visibility = "hidden"
    window.location.reload()
})