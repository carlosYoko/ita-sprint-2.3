export class Memoize {
  addWithMemoize(): (a: number, b: number) => Promise<string> {
    let dictionary: { [key: string]: number } = {};

    return async function (a: number, b: number) {
      const key = `${a}_${b}`;

      return new Promise((res, rej) => {
        if (dictionary.hasOwnProperty(key)) {
          res(
            `El calculo de ${a.toString()} más ${b.toString()} ya está memoizado: ${
              dictionary[key]
            }`
          );
        } else {
          dictionary[key] = a + b;
          res(
            `Se va a calcular por primera vez la suma de ${a.toString()} más ${b.toString()}, resultado: ${
              dictionary[key]
            }`
          );
        }
      });
    };
  }
}
