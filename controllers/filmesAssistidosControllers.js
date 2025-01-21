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
];

const getFilmesAssistidos = (req, res) => {
  res.json(filmesAssistidos);
};

const getFilmeAssistido = (req, res) => {
  const filmeAssistido = filmesAssistidos.filter(filme => filme.id == req.params.id);
  if (filmeAssistido.length == 1) {
    res.json(filmeAssistido);
  } else {
    res.json({
      error: true,
      message: `Filme de id ${req.params.id} não encontrado.`
    });
  }
};

const postFilmeAssistido = (req, res) => {
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
    message: `Filme adicionado com sucesso.`,
    data: filmeNovo
  });
};

const putFilmeAssistido = (req, res) => {
  const posicaoFilme = filmesAssistidos.findIndex(filme => filme.id == req.params.id);

  if (posicaoFilme != -1) {
    const filmeEditado = filmesAssistidos[posicaoFilme];

    const { nome, duracao, avaliacaoGeral, avaliacaoPessoal, genero } = req.body;

    filmeEditado.nome = nome || filmeEditado.nome;
    filmeEditado.duracao = duracao || filmeEditado.duracao;
    filmeEditado.avaliacaoGeral = avaliacaoGeral || filmeEditado.avaliacaoGeral;
    filmeEditado.avaliacaoPessoal = avaliacaoPessoal || filmeEditado.avaliacaoPessoal;
    filmeEditado.genero = genero || filmeEditado.genero;

    res.json(
      {
        error: false,
        message: `Filme de id ${filmeEditado.id} editado com sucesso.`,
        data: filmeEditado
      }
    );
  } else {
    res.json({
      error: true,
      message: `Filme de id ${req.params.id} não encontrado.`
    });
  }
};

const deleteFilmeAssistido = (req, res) => {
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
};

export { getFilmesAssistidos, getFilmeAssistido, postFilmeAssistido, putFilmeAssistido, deleteFilmeAssistido };