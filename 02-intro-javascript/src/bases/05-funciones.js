
(function () {

    //funciones

    const saludar = nombre => `hola ${nombre}`;

    const getUser = () => ({
        id: 0,
        user: "jhankee",
    })

    const user = getUser();

    console.log(saludar("goku"));
    console.log(user);

})();