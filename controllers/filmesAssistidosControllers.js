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
  
  if (!nome || !duracao || !avaliacaoGeral || !avaliacaoPessoal || !genero) {
    return res.status(400).json({
      error: true,
      message: "Todos os campos são obrigatórios."
    });
  }

  if (typeof duracao !== 'number' || duracao <= 0) {
    return res.status(400).json({
      error: true,
      message: "Duração deve ser um número maior que zero."
    });
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
    message: "Filme adicionado com sucesso.",
    data: filmeNovo
  });
};


const putFilmeAssistido = (req, res) => {
  const { id } = req.params;
  const posicaoFilme = filmesAssistidos.findIndex(filme => filme.id == id);

  if (posicaoFilme === -1) {
    return res.status(404).json({
      error: true,
      message: `Filme de id ${id} não encontrado.`
    });
  }

  const { nome, duracao, avaliacaoGeral, avaliacaoPessoal, genero } = req.body;
  if (!nome || !duracao || !avaliacaoGeral || !avaliacaoPessoal || !genero) {
    return res.status(400).json({
      error: true,
      message: "Todos os campos são obrigatórios."
    });
  }

  if (typeof duracao !== 'number' || duracao <= 0) {
    return res.status(400).json({
      error: true,
      message: "Duração deve ser um número maior que zero."
    });
  }

  const filmeEditado = filmesAssistidos[posicaoFilme];
  filmeEditado.nome = nome;
  filmeEditado.duracao = duracao;
  filmeEditado.avaliacaoGeral = avaliacaoGeral;
  filmeEditado.avaliacaoPessoal = avaliacaoPessoal;
  filmeEditado.genero = genero;

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