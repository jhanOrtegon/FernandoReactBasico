const apiKey = "rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq";
const url = "https://api.giphy.com/v1/gifs/random?api_key="

const getGif = async () => {
    const peticion = await fetch(`${url}${apiKey}`);
    const respuesta = await peticion.json();
    const urlGif = respuesta.data.images.downsized_large.url;
    insertarGif(urlGif)
}

function insertarGif(gif) {
    const img = document.createElement("img");
    img.src = gif;
    document.body.appendChild(img)
}

getGif();
