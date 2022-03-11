import { heroes } from "../data/heroes"

const getHeroeByName = (name) => {
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase()))
}

export default getHeroeByName
