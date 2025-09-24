const model = require("../models/tarefaModel");

const listarTarefas = (req, res) => {
    res.json(model.listar());
};

const criarTarefa = (req, res) => {
    const novaTarefa = model.criar(req.body);
    res.status(201).json(novaTarefa);
};

const buscarTarefa = (req, res, next) => {
    const { id } = req.params;
    const tarefaEncontrada = model.obter(id);
    if (tarefaEncontrada) {
        req.tarefa = tarefaEncontrada;
        return next();
    };
    res.status(404).json({msg: "Tarefa não encontrada"})
}

const obterTarefa =  (req, res) => {
    res.json(req.tarefa);
};

const atualizarTarefa = (req, res) => {
    const { id } = req.params;
    const tarefaEncontrada = model.atualizar({ id, ...req.body });
    if (tarefaEncontrada){
    return res.json(tarefaEncontrada);
    }
    res.status(404).json({msg: "Tarefa não encontrada"});
};

const deletarTarefa = (req, res) => {
    const { id } = req.params
    const posicao = model.deletar(id);
    if (posicao >= 0){
        return res.status(204).end();
    }
    res.status(404).json({msg: "Tarefa não encontrada"});
};

module.exports = {
    listarTarefas, 
    buscarTarefa, 
    criarTarefa, 
    obterTarefa, 
    atualizarTarefa, 
    deletarTarefa
} 