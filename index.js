class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {

      let ataque;

      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'realizou um ataque';
      }
      
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }

  const mago = new Heroi('Eldric', 1356, 'mago');
  const guerreiro = new Heroi('Garrick', 35, 'guerreiro');
  const monge = new Heroi('Shaolin', 45, 'monge');
  const ninja = new Heroi('Ryu', 30, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar(); 
