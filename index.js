const express = require("express");
const cors = require("cors"); //importa o cors

const app = express();
app.use(express.json());
app.use(cors()); //exporta o cors para o app.js

let livros = []; // Array em memória para armazenar os livros

app.post("/livros", (req, res) => {
  const novoLivro = {
    id: req.body.id,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora,
    autor: req.body.autor, 
  };
  livros.push(novoLivro); // Adiciona o novo livro ao array
  res.status(201).json(novoLivro); // Envia a resposta com o livro criado
}); //cadastra livros

app.get("/livros", (req, res) => {
  if (livros.length > 0) {
    res.json(livros);
  } else {
    res.status(404).json({ mensagem: "Nenhum livro cadastrado" });
  }
}); //busca todos os livros

app.get("/livros/:id", (req, res) => {
  const livro = livros.find((livro) => livro.id == req.params.id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: "ID não encontrado" });
  }
}); //busca livro por id

app.put("/livros/:id", (req, res) => {
    const livro = livros.find((livro) => livro.id == req.params.id);
    if (livro) {
      livro.titulo = req.body.titulo;
      livro.num_paginas = req.body.num_paginas;
      livro.isbn = req.body.isbn;
      livro.editora = req.body.editora;
      livro.autor = req.body.autor;
      res.json(livro);
    } else {
      res.status(404).json({ mensagem: "Não foi possivel editar o livro" });
    }
  }); //edita livro

app.delete("/livros/:id", (req, res) => {
    const livro = livros.find((livro) => livro.id == req.params.id);
    if (livro) {
      livros = livros.filter((livro) => livro.id!= req.params.id);
      res.json({ mensagem: "Livro removido com sucesso" });
    } else {
      res.status(404).json({ mensagem: "ID não encontrado" });
    }
  }); //remove livro

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
