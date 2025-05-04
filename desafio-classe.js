class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      if (this.tipo === "mercenário") {
        ataque = "Dragonslayer";
      } else if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "pistoleiro") {
        ataque = "pistolas";
      } else {
        ataque = "usou um ataque genérico";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  let guts = new Heroi("Guts", 24, "mercenário");
  let gandalf = new Heroi("Gandalf", 3000, "mago");
  let justice = new Heroi("Justice", 50, "pistoleiro");
  
  
  guts.atacar();
  gandalf.atacar();
  justice.atacar();