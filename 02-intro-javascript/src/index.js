
(function () {

    //desestructuracion de objetos

    const persona = {
        nombre: "eren",
        edad: 16,
        clave: "titan"
    }

    const useContex = ({ nombre, edad, clave }) => {
        return { clave, edad }
    }

    const clave = useContex(persona);





})();