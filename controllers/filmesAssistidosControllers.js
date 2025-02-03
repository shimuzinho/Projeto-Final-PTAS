let filmesAssistidos = [
  {
    id: 1,
    nome: 'O Retorno do Inesperado',
    duracao: 2.0,
    avaliacaoGeral: 8,
    avaliacaoPessoal: 9,
    genero: 'Aventura'
  },
  {
    id: 2,
    nome: 'Guerras Esquecidas',
    duracao: 2.5,
    avaliacaoGeral: 7,
    avaliacaoPessoal: 6,
    genero: 'Histórico'
  },
  {
    id: 3,
    nome: 'Corrida contra o Tempo',
    duracao: 1.8,
    avaliacaoGeral: 6,
    avaliacaoPessoal: 7,
    genero: 'Suspense'
  },
  {
    id: 4,
    nome: 'Sobreviventes do Amanhã',
    duracao: 2.2,
    avaliacaoGeral: 9,
    avaliacaoPessoal: 9,
    genero: 'Ficção Científica'
  }
];

const getFilmesAssistidos = (req, res) => {
  res.json({
    error: false,
    message: 'Busca realizada com sucesso.',
    data: filmesAssistidos
  });
};

const getFilmeAssistido = (req, res) => {
  const filmeAssistido = filmesAssistidos.filter(filme => filme.id == req.params.id);
  if (filmeAssistido.length == 1) {
    res.json({
      error: false,
      message: 'Busca realizada com sucesso.',
      data: filmeAssistido
    });
  } else {
    res.json({
      error: true,
      message: `Filme de id ${req.params.id} não encontrado.`
    });
  }
};

const postFilmeAssistido = (req, res) => {
  const { nome, duracao, avaliacaoGeral, avaliacaoPessoal, genero } = req.body;

  if (!nome || !duracao || !avaliacaoGeral || !avaliacaoPessoal || !genero) {
    return res.json({
      error: true,
      message: 'Todos os campos são obrigatórios.'
    });
  }

  if (!(typeof nome == 'string') ||
    !(typeof duracao == 'number') ||
    !(typeof avaliacaoGeral == 'number') &&
    avaliacaoGeral <= 5 &&
    avaliacaoGeral >= 0 ||
    !(typeof avaliacaoPessoal == 'number') &&
    avaliacaoPessoal <= 5 &&
    avaliacaoPessoal >= 0 ||
    !(typeof genero == 'string')) {
    return res.json(
      {
        error: true,
        message: 'Erro na validação de dados.'
      })
  }

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
    message: 'Filme adicionado com sucesso.',
    data: filmeNovo
  });
};


const putFilmeAssistido = (req, res) => {
  const { id } = req.params;
  const posicaoFilme = filmesAssistidos.findIndex(filme => filme.id == id);

  if (posicaoFilme == -1) {
    return res.json({
      error: true,
      message: `Filme de id ${id} não encontrado.`
    });
  }

  const { nome, duracao, avaliacaoGeral, avaliacaoPessoal, genero } = req.body;

  if (
    (nome && !(typeof nome == 'string')) ||
    (duracao && !(typeof duracao == 'number')) ||
    (avaliacaoGeral && !(typeof avaliacaoGeral == 'number') && avaliacaoGeral <= 5 && avaliacaoGeral >= 0) ||
    (avaliacaoPessoal && !(typeof avaliacaoPessoal == 'number') && avaliacaoPessoal <= 5 && avaliacaoPessoal >= 0) ||
    (genero && !(typeof genero == 'string'))
  ) {
    return res.json(
      {
        error: true,
        message: 'Erro na validação de dados.'
      })
  }

  const filmeEditado = filmesAssistidos[posicaoFilme];
  filmeEditado.nome = nome || filmeEditado.nome;
  filmeEditado.duracao = duracao || filmeEditado.duracao;
  filmeEditado.avaliacaoGeral = avaliacaoGeral || filmeEditado.avaliacaoGeral;
  filmeEditado.avaliacaoPessoal = avaliacaoPessoal || filmeEditado.avaliacaoPessoal;
  filmeEditado.genero = genero || filmeEditado.genero;

  res.json({
    error: false,
    message: `Filme de id ${id} editado com sucesso.`,
    data: filmeEditado
  });
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