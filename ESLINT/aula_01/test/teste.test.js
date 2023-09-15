const { somaNumeros } = require('../index');

test('A função deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

  expect(retornado).toBe(esperado);
});

const { subtraiNumeros } = require('../index');

test('A função deve subtrair dois números', () => {
  const esperado = 10;
  const retornado = subtraiNumeros(20, 10);

  expect(retornado).toBe(esperado);
});
