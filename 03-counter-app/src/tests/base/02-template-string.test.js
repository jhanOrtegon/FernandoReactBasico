import { getSaludo } from "../../base/02-template-string";

test('getSaludo debe retornar "Hola jhan carlos" ', () => {
    const nombre = "jhan carlos";
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Carlos`)
});
