var javaScript = 50
var html = 80
var css = 70
var php = 25
var bd = 35

const progresso = document.querySelector(".barra")

    if (javaScript <= 30) {

        progresso.innerHTML = "<h4>Basico</h4>"
        progresso.setAttribute("style", "width:" + javaScript +"%")

    } else if (javaScript >= 31 && javaScript <= 50){

        progresso.innerHTML = "<h4>Intermediario</h4>"
        progresso.setAttribute("style", "width:" + javaScript +"%")

    } else if (javaScript >= 51 && javaScript <= 75) {

        progresso.innerHTML = "<h4>Avançado</h4>"
        progresso.setAttribute("style", "width:" + javaScript +"%")

    } else if (javaScript >= 76 && javaScript <= 100) {

        progresso.innerHTML = "<h4>Mestre</h4>"
        progresso.setAttribute("style", "width:" + javaScript +"%")

    } else {
        console.log("Erro!!")
    }

    //progresso.setAttribute("style", "width: 50%");


    if (html <= 30) {

        progresso.innerHTML = "<h4>Basico</h4>"
        progresso.setAttribute("style", "width:" + html +"%")

    } else if (html >= 31 && html <= 50){

        progresso.innerHTML = "<h4>Intermediario</h4>"
        progresso.setAttribute("style", "width:" + html +"%")

    } else if (html >= 51 && html <= 75) {

        progresso.innerHTML = "<h4>Avançado</h4>"
        progresso.setAttribute("style", "width:" + html +"%")

    } else if (html >= 76 && html <= 100) {

        progresso.innerHTML = "<h4>Mestre</h4>"
        progresso.setAttribute("style", "width:" + html +"%")

    } else {
        console.log("Erro!!")
    }



    if (css <= 30) {

        progresso.innerHTML = "<h4>Basico</h4>"
        progresso.setAttribute("style", "width:" + css +"%")

    } else if (css >= 31 && css <= 50){

        progresso.innerHTML = "<h4>Intermediario</h4>"
        progresso.setAttribute("style", "width:" + css +"%")

    } else if (css >= 51 && css <= 75) {

        progresso.innerHTML = "<h4>Avançado</h4>"
        progresso.setAttribute("style", "width:" + css +"%")

    } else if (css >= 76 && css <= 100) {

        progresso.innerHTML = "<h4>Mestre</h4>"
        progresso.setAttribute("style", "width:" + css +"%")

    } else {
        console.log("Erro!!")
    }


    if (php <= 30) {

        progresso.innerHTML = "<h4>Basico</h4>"
        progresso.setAttribute("style", "width:" + php +"%")

    } else if (php >= 31 && php <= 50){

        progresso.innerHTML = "<h4>Intermediario</h4>"
        progresso.setAttribute("style", "width:" + php +"%")

    } else if (php >= 51 && php <= 75) {

        progresso.innerHTML = "<h4>Avançado</h4>"
        progresso.setAttribute("style", "width:" + php +"%")

    } else if (php >= 76 && php <= 100) {

        progresso.innerHTML = "<h4>Mestre</h4>"
        progresso.setAttribute("style", "width:" + php +"%")

    } else {
        console.log("Erro!!")
    }


    if (bd <= 30) {

        progresso.innerHTML = "<h4>Basico</h4>"
        progresso.setAttribute("style", "width:" + bd +"%")

    } else if (bd >= 31 && bd <= 50){

        progresso.innerHTML = "<h4>Intermediario</h4>"
        progresso.setAttribute("style", "width:" + bd +"%")

    } else if (bd >= 51 && bd <= 75) {

        progresso.innerHTML = "<h4>Avançado</h4>"
        progresso.setAttribute("style", "width:" + bd +"%")

    } else if (bd >= 76 && bd <= 100) {

        progresso.innerHTML = "<h4>Mestre</h4>"
        progresso.setAttribute("style", "width:" + bd +"%")

    } else {
        console.log("Erro!!")
    }