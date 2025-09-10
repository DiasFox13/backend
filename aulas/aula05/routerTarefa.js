const express = require("express");

// middleware de rota
const router = express.Router();

router.get('/', (req, res) => {
    res.send("chegou aqui!");
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send("inserido com sucesso!");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id == 1) return res.send("Achei!");
    throw Error ("Não achei");
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    if (id == 1) return res.send("Tarefa alterada");
    res.status(404).send("Tarefa não encontrada");
});

router.delete("/:id", (req, res) => {
    res.status(204).end(); // sem corpo
});

module.exports = router;