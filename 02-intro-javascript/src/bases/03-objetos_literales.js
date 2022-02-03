(function () {

    const persona = {
        nombre: "jhan",
        apellido: "ortegon",
        email: "jhan@gmail.com",
        edad: 24
    };

    const persona2 = { ...persona }
    persona2.nombre = "valentina"

    console.log({ persona });
    console.log({ persona2 });


})();