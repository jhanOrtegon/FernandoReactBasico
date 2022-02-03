import { getByIdHeroe } from "./bases/08-exports";

(function () {

    // promesas

    // const promesa = new Promise((resolve, reject) => {

    //     setTimeout(() => {
    //         const heroe = getByIdHeroe(25);
    //         (heroe !== undefined) ? resolve(heroe) : reject("no se pudo encontrar el heroe")
    //     }, 2000);
    // })

    // promesa.then((e) => {
    //     console.table(e);
    // })
    //     .catch(err => {
    //         console.error(err);
    //     })

    const getJsonDbHeroes = async () => {
        const peticion = await fetch("/dbHeroes.json");
        const dbHeroes = await peticion.json();
        return dbHeroes;
    }

    const getByIdHeroeAsync = async id => {
        return new Promise((resolve, reject) => {
            getJsonDbHeroes();
            const heroe = getByIdHeroe(id);
            (heroe !== undefined) ? resolve(heroe) : reject("no se pudo encontrar el heroe")
        })
    }

    getByIdHeroeAsync(555)
        .then(console.log)
        .catch(console.error)

})();