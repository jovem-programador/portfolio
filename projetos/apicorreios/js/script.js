const inputEnviar = document.querySelector("#enviar")
const cepInput = document.querySelector("#cep")

//  Utilizando tabela para receber os dados
const tabela = document.querySelector("#tabela")

const trTabela = document.createElement("tr")

const tdTabela1 = document.createElement("td")
const tdTabela2 = document.createElement("td")
const tdTabela3 = document.createElement("td")
const tdTabela4 = document.createElement("td")

//Recebendo o CEP do Input
function enviandoDados() {
    let cep = cepInput.value

    cepInput.value = cepInput.innerText = ' '

    getCep(cep)
    mudandoCss()
}

//Função responsavel por pegar o CEP da API
async function getCep(cep) {
    
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const reponse = await fetch(url)

    const data = await reponse.json()

    //clearDados()
    
    console.log(data)

    tratmentoDeDados(data)

}

function tratmentoDeDados(data) {
//Tabela
   tdTabela1.innerText = data.logradouro
   tdTabela2.innerText = data.bairro
   tdTabela3.innerText = data.localidade
   tdTabela4.innerText = data.cep


   trTabela.appendChild(tdTabela1)
   trTabela.appendChild(tdTabela2)
   trTabela.appendChild(tdTabela3)
   trTabela.appendChild(tdTabela4)

   tabela.appendChild(trTabela)
}

function mudandoCss() {

    let teste = document.querySelector(".containerTabela").style
    teste.visibility = "visible"
}