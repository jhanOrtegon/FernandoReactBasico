import { heroes } from "../data/heroes"

const getHeroeByName = (name) => {
    if (name.length === 0) {
        return []
    } return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase()))
}

export default getHeroeByName
