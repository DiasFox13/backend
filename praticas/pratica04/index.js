const express = require('express'); // importa o Express

const tarefas = [
    { id: 1, nome: "Estudar middleware", concluida: false },
    { id: 2, nome: "Praticar express", concluida: true }
];

const app = express(); // instancia do Express

app.use(express.json()); // converte Json

app.use((req, res, next) => {
    const dataHora = new Date().toLocaleString('pt-BR');
    console.log(`Foi SOLICITADO ${dataHora} | ${req.method} ${req.url}`);
    next();
});

const PORT = 3000; // SERVIDOR

const router = express.Router(); // Roteador

router.get('/tarefas', (req, res) => {
    res.json(tarefas); 
});

router.post('tarefas/', (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        nome: req.body.nome,
        concluida: req.body.concluida
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

router.get('tarefas/:id', (req, res) => {
    const id = parseInt(req.params.tarefaId);
    const tarefa = tarefas.find(t => t.id === id);

    if(!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada'});
    }

    res.json(tarefa);
});

router.put('tarefas/:id', (req, res) => {
    const id = parseInt(req.params.tarefaId);
    const tarefaIndex = tarefas.findIndex(t = t.id === id);

    if (tarefaIndex === -1) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    if (req.body.nome) tarefas
});

app.listen(PORT, () => {
    console.log(`Servidor rodando | Porta ${PORT}`)
});

module.exports = app;