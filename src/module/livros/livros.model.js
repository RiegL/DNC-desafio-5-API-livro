const livrosSchema = new Schema(
  {
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
    autor: String,
  },
  { 
    timestamps: true
 }
);

const LivrosModel = model('livros', livrosSchema);
module.exports = LivrosModel;
