const conectarDb = require("./database")

class Tarefa {
    constructor(nome, concluida) {
        this.db = null
        this.collection = null
        this.nome = nome;
        this.concluida = concluida;
        this.id = null;
    }

    async init() {
    this.db = await conectarDb();
    this.collection = this.db.collection('tarefas');
    }

    async inserir() {
        const resultado = await this.collection.insertOne({ nome: this.nome, concluida: this.concluida });
        this.id = resultado.insertedId;
    }

    async altertar() {
        await this.collection.findOne(
            { _id: this.id },
            { $set: { nome: this.nome, concluida: this.concluida } }
        );
    }
}

async function exemplo() {
    const tarefa = new Tarefa("tarefa exemplo", false);
    console.log(tarefa.db);
}



module.exports = Tarefa;