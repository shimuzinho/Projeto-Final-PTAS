import express from 'express';

const app = express();
const port = 3000;

let filmesAssistidos = [
  {
    id: 1,
    nome: 'A volta dos que não foram',
    duracao: 1.5,
    avaliacaoGeral: 5,
    avaliacaoPessoal: 5,
    genero: 'Ação'
  },
  {
    id: 2,
    nome: 'A volta dos que não foram',
    duracao: 1.5,
    avaliacaoGeral: 5,
    avaliacaoPessoal: 5,
    genero: 'Ação'
  },
  {
    id: 3,
    nome: 'A volta dos que não foram',
    duracao: 1.5,
    avaliacaoGeral: 5,
    avaliacaoPessoal: 5,
    genero: 'Ação'
  },
  {
    id: 4,
    nome: 'A volta dos que não foram',
    duracao: 1.5,
    avaliacaoGeral: 5,
    avaliacaoPessoal: 5,
    genero: 'Ação'
  }
]

app.use(express.json());

app.get('/', (req, res) => {
  res.json(filmesAssistidos);
});

app.get('/:id', (req, res) => {
  const filmeAssistido = filmesAssistidos.filter(filme => filme.id == req.params.id);
  if (filmeAssistido.length == 1) {
    res.json(filmeAssistido);
  } else {
    res.json({ 
      error: true,
      message: `Filme de id ${req.params.id} não encontrado.`
    });
  }
});

app.post('/', (req, res) => {
  const { nome, duracao, avaliacaoGeral, avaliacaoPessoal, genero } = req.body;
  const filmeNovo = {
    id: Date.now(),
    nome,
    duracao,
    avaliacaoGeral,
    avaliacaoPessoal,
    genero
  };
  filmesAssistidos.push(filmeNovo);
  res.json({
    error: false,
    message: `Filme adicionado com sucesso`,
    data: filmeNovo
  });
});

app.put('/:id', (req, res) => {
  
});

app.delete('/:id', (req, res) => {
  const novosFilmesAssistidos = filmesAssistidos.filter(filme => filme.id != req.params.id);
  if (filmesAssistidos.length == novosFilmesAssistidos.length) {
    res.json({
      error: true,
      message: `Filme de id ${req.params.id} não encontrado.`
    });
  } else {
    filmesAssistidos = novosFilmesAssistidos;
    res.json({
      error: false,
      message: `Filme de id ${req.params.id} excluído com sucesso.`,
      data: filmesAssistidos
    });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})