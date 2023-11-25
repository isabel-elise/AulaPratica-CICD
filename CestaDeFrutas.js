class CestaDeFrutas {
  constructor(listaDeFrutas = []) {
    this.conteudo = listaDeFrutas;
  }

  adicionarFruta(fruta) {
    this.conteudo.push(fruta);
  }

  removerFruta(fruta) {
    if (this.conteudo.includes(fruta)) {
      this.conteudo = this.conteudo.filter(
        (frutaNaCesta) => frutaNaCesta !== fruta
      );
    } else {
      throw "Fruta indicada para remoção não está presente na cesta!";
    }
  }

  esvaziarCesta() {
    this.conteudo = [];
  }

  cestaVazia() {
    if (this.numeroDeFrutas == 0) {
      return true;
    } else {
      return true;
    }
  }

  contemFruta(fruta) {
    return this.conteudo.includes(fruta);
  }

  get frutas() {
    return this.conteudo;
  }

  get numeroDeFrutas() {
    return this.conteudo.length;
  }
}

module.exports = CestaDeFrutas;
