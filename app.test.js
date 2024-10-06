const sayHello = require('./app');

test('Debe retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});
