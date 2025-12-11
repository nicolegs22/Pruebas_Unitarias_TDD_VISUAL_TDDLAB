import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz — Casos Positivos", () => {
  test("múltiplos de 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  test("múltiplos de 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("múltiplos de 3 y 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("números que no son múltiplos", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});

describe("FizzBuzz — Casos Negativos", () => {
  test("entrada no numérica lanza error", () => {
    expect(() => fizzBuzz("a")).toThrow("Entrada no numérica");
  });

  test("número negativo lanza error", () => {
    expect(() => fizzBuzz(-3)).toThrow("Número negativo no permitido");
  });
});

describe("FizzBuzz — Casos Adicionales", () => {

  test("cero devuelve FizzBuzz (si tu lógica lo permite)", () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
  });


  test("número muy grande múltiplo de 5", () => {
    expect(fizzBuzz(5000)).toBe("Buzz");
  });

  test("número muy grande múltiplo de 15", () => {
    expect(fizzBuzz(15000)).toBe("FizzBuzz");
  });

  test("valor undefined lanza error", () => {
    expect(() => fizzBuzz(undefined)).toThrow("Entrada no numérica");
  });

  test("valor null lanza error", () => {
    expect(() => fizzBuzz(null)).toThrow("Entrada no numérica");
  });

  test("boolean true lanza error", () => {
    expect(() => fizzBuzz(true)).toThrow("Entrada no numérica");
  });

  test("boolean false lanza error", () => {
    expect(() => fizzBuzz(false)).toThrow("Entrada no numérica");
  });

  test("array lanza error", () => {
    expect(() => fizzBuzz([3])).toThrow("Entrada no numérica");
  });

  test("objeto lanza error", () => {
    expect(() => fizzBuzz({ num: 3 })).toThrow("Entrada no numérica");
  });

});
