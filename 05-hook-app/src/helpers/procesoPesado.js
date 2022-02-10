export const procesoPesado = (valor) => {
    for (let i = 0; i <= valor; i++) {
        console.log("proceso pesado...");
    }
    return <h1>{valor} iteracciones realizadas</h1>
}
