
(function () {

    //arreglos

    // const arreglo = new Array(10); // arreglo con tamaño predefinido
    // console.log(arreglo);

    const arreglo = [10, 20, 30]
    const arreglo2 = [...arreglo, 40, 50, 60]
    const arreglo3 = arreglo2.map(e => e * e);
    console.log(arreglo2);
    console.log(arreglo3);


})();