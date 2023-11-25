const CestaDeFrutas = require("./CestaDeFrutas");

test("Cria uma cesta vazia", () => {
  const cesta = new CestaDeFrutas();
  expect(cesta.cestaVazia()).toBeTruthy();
});

test("Cria uma cesta com um conjunto não vazio de frutas", () => {
  const cesta = new CestaDeFrutas(["Morango"]);
  expect(cesta.cestaVazia()).toBeFalsy();
});

test("Cria uma cesta com o conjunto de frutas passado como parâmetro", () => {
  const conjuntoDeFrutas = ["Morango", "Laranja", "Amora"];
  const cesta = new CestaDeFrutas(conjuntoDeFrutas);
  expect(cesta.frutas).toEqual(conjuntoDeFrutas);
});

test("Adiciona uma fruta a uma cesta vazia", () => {
  const cesta = new CestaDeFrutas();
  cesta.adicionarFruta("Abacaxi");
  expect(cesta.numeroDeFrutas).toBe(1);
});

test("Adiciona uma fruta a uma cesta não vazia", () => {
  const cesta = new CestaDeFrutas(["Limão", "Banana"]);
  cesta.adicionarFruta("Melão");
  expect(cesta.numeroDeFrutas).toBe(3);
});

test("Remove uma fruta persente em uma cesta", () => {
  const cesta = new CestaDeFrutas(["Abacate", "Pera"]);
  cesta.removerFruta("Abacate");
  expect(cesta.contemFruta("Abacaxi")).toBeFalsy();
});

test("Remove uma fruta não persente em uma cesta", () => {
  const cesta = new CestaDeFrutas(["Abacate", "Pera"]);
  expect(() => {
    cesta.removerFruta("Maçã");
  }).toThrow("Fruta indicada para remoção não está presente na cesta!");
});

test("Esvazia uma cesta de frutas", () => {
  const cesta = new CestaDeFrutas(["Ameixa", "Mamão", "Uva"]);
  cesta.esvaziarCesta();
  expect(cesta.cestaVazia()).toBeTruthy();
});
