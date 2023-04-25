const chaveAPI = '95217d15723b3ba07c9ba03d8fafe860'
const apiUnsplash = "https://source.unsplash.com/1920x1080/?";

const input = document.querySelector('#trem')
const temp = document.querySelector('#temp')
const clima = document.querySelector('#clima')
const humidade = document.querySelector('#humidade')
const velVento = document.querySelector('#veloVento')
const imgClima = document.querySelector('#imgClima')
const iconClima = document.querySelector('#iconClima')

const conteudo = document.querySelector('.conteudo')

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {

        conteudo.style.display = 'block'

        buscar()
    }
})


async function buscar() {
    const city = input.value

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${chaveAPI}&lang=pt_br`

    const res = await fetch(apiURL)

    const data = await res.json()

    console.log(data)
    
    if (data.cod == '404') {

        imgClima.src = 'img/404.png'
        temp.innerHTML = ` `
        clima.innerHTML = `Desculpa!! Cidade não encontrada`
        humidade.innerHTML = `0`
        velVento.innerHTML = `0`

    } else {

    temp.innerHTML = `${data.main.temp.toFixed(0)} °C`
    humidade.innerHTML = `${data.main.humidity}%`
    velVento.innerHTML = `${data.wind.speed.toFixed(0)} km/h`

    data.weather.map((e) => {
        clima.innerHTML = e.description
        //iconClima.src = `https://openweathermap.org/img/wn/${e.icon}@2x.png`
        console.log(e)

        if (e.main == 'Clouds') {

            imgClima.src = 'img/cloud.png'

        } else if(e.main == 'Clear') {

            imgClima.src = 'img/clear.png'

        } else if(e.main == 'Snow') {

            imgClima.src = 'img/snow.png'

        } else if(e.main == 'Rain') {

            imgClima.src = 'img/rain.png'

        } else if(e.main == 'Drizzle') {

            imgClima.src = 'img/cloudy.png'

        } else if(e.main == 'Thunderstorm') {

            imgClima.src = 'img/tempestade.png'

        } else {
            console.log('erro!!')
        }
    })

    conteudo.style.display = 'block'

    document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;
    }

}