import { getUser, getUsuarioActivo } from "../../base/05-funciones";

test('debe retornar un objeto igual', () => {
    const usuario = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    expect(getUser()).toEqual(usuario)

});

test('debe retornar un objeto igual con argumentos', () => {

    const nombre = "jhan carlos"

    const usuario = {
        uid: 'ABC567',
        username: nombre
    }

    expect(getUsuarioActivo(nombre)).toEqual(usuario)

});