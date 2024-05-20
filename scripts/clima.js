setTimeout(() => {
const apiKey = "ce2f128f145dbac98af453f697d5cfad";
const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const diffKelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const cityName = document.getElementById('ciudadEntrada').value;
    if (cityName)
        {
            fetchDatosClima(cityName);
        }
})

function fetchDatosClima(cityName) {
    fetch (`${urlBase}?q=${cityName}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML='';

    const ciudad = data.name;
    const pais = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const parsedTemperatura = parseInt(temperatura-diffKelvin);
    const descripcion = data.weather[0].description;
    const icon = data.weather[0].icon;
    //console.log(icon)

    const ciudadElement = document.createElement('h2');
    ciudadElement.textContent = `Ciudad: ${ciudad} (${pais})`;

    const temperaturaElement = document.createElement('h3');
    temperaturaElement.textContent = `La temperatura es de: ${parsedTemperatura}°C`;

    const humedadElement = document.createElement('h3');
    humedadElement.textContent = `La humedad es del: ${humedad}%`;

    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = `La descripcion meteorologica es: ${descripcion}`;

    const iconElement = document.createElement('img');
    iconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    divDatosClima.appendChild(ciudadElement)
    divDatosClima.appendChild(temperaturaElement)
    divDatosClima.appendChild(humedadElement)
    divDatosClima.appendChild(descripcionElement)
    divDatosClima.appendChild(iconElement)
}

}, 500);


