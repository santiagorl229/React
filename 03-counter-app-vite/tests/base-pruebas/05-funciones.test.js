import { getUser } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUser).toStrictEqual(user);
    });
    test('Prueba a la funcion getUsuarioActivo',()=>{
        const name = 'Fernando';
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqualU({
            uid: 'ABC567',
            username: name
        });
    });
});