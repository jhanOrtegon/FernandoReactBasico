const getFetchGif = async (categoria) => {
    const api_key = "rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq";
    const busqueda = encodeURI(categoria)
    const limite = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limite}&api_key=${api_key}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(e => (
        {
            id: e.id,
            enlace: e.images.original.url,
            title: e.title
        }
    ));

    return gifs;
}

export default getFetchGif;