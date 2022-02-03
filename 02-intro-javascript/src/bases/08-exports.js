import { heroes } from "../bases/heroes";

//imports , exports, funciones comunes
export const getByIdHeroe = id => heroes.find(heroe => heroe.id === id);
export const getByOwnerHeroe = owner => heroes.filter(heroe => heroe.owner === owner)



