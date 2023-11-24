import { Memoize } from '../models/MemoizeModel';

describe('Memoize', () => {
  const memoize = new Memoize();
  const addNumbers = memoize.addWithMemoize();

  it('debería memorizar la suma de dos números y mostrar el mensaje esperado', async () => {
    const resultado1 = await addNumbers(3, 5);

    expect(resultado1).toBe(
      'Se va a calcular por primera vez la suma de 3 más 5, resultado: 8'
    );
  });

  it('debería mostrar el cálculo memoizado y el mensaje esperado', async () => {
    const resultado2 = await addNumbers(3, 5);

    expect(resultado2).toBe('El calculo de 3 más 5 ya está memoizado: 8');
  });

  it('debería memorizar la suma de dos números nuevos y mostrar el mensaje esperado', async () => {
    const resultado3 = await addNumbers(2, 2);

    expect(resultado3).toBe(
      'Se va a calcular por primera vez la suma de 2 más 2, resultado: 4'
    );
  });
});
