class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = "";
        if(this.tipo === "mago"){
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro"){
            ataque = "usou espada";
        } else if (this.tipo === "monge"){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }
        return `o ${this.tipo} atacou usando ${ataque}`
    }
}

const player1 = new Hero("Seu Madruga", "todos", "mago");

console.log(player1.atacar());
