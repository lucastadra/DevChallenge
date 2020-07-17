/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
const express = require('express');

const server = express();

server.use(express.json());

const obras = [];

function checaObra(req, res, next) {
  const { id } = req.params;
  const obra = obras.find((obra) => obra.id == id);
  if (!obra) {
    return res.status(400).json({ error: 'A obra não foi encontrada!' });
  }

  return next();
}

server.get('/obras', (req, res) => {
  return res.json(obras);
});

server.post('/obras', (req, res) => {
  const { titulo, editora, foto, autores } = req.body;
  id = obras.length + 1;
  const obra = {
    id,
    titulo,
    editora,
    foto,
    autores: [],
  };

  obra.autores.push(autores);

  obras.push(obra);
  return res.json(obra);
});

/* server.post('/obras/:id/autores', checaObra, (req, res) => {
  const { id } = req.params;
  const { autor } = req.body;

  const obra = obras.find((obra) => obra.id === id);
  obras.autores.push(autor);
  return res.json(obra);
}); */

server.put('/obras/:id', checaObra, (req, res) => {
  const { id } = req.params;
  const { titulo, editora, foto, autores } = req.body;
  const obraIndex = obras.findIndex((obra) => obra.id == id);

  if (obraIndex < 0) {
    return response.status(400).json({ error: 'Não encontrado' });
  }

  obras[obraIndex] = {
    id,
    titulo: titulo ? titulo : obras[obraIndex].titulo,
    editora: editora ? editora : obras[obraIndex].editora,
    foto: foto ? foto : obras[obraIndex].foto,
    autores: autores ? autores : obras[obraIndex].autores,
  };

  return res.json(obras[obraIndex]);
});

server.delete('/obras/:id', checaObra, (req, res) => {
  const { id } = req.params;
  const obraPos = obras.findIndex((obra) => obra.id == id);
  obras.splice(obraPos, 1);
  return res.send();
});

server.listen(3333);
