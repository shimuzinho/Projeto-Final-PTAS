# API de Gerenciamento de Filmes Assistidos

Esta API permite aos usuários gerenciar uma lista de filmes que assistiram, incluindo detalhes como nome do filme, duração, avaliações e gênero.

## Instalação

Para rodar esta API localmente, siga estes passos:

1. Instale as dependências com: `npm i`
2. Inicie o projeto com: npm run dev
3. Acesse em `http://localhost:3000`
4. Utilize postman para testar Post, Put e Delete

## Rotas da API

### Listar Todos os Filmes

- **GET** `/filmes`
- **Descrição**: Retorna uma lista de todos os filmes assistidos.
- **Resposta**: Array de objetos contendo informações sobre os filmes.

### Buscar Filme por ID

- **GET** `/filmes/:id`
- **Descrição**: Retorna detalhes de um filme específico baseado no ID fornecido.
- **Parâmetros**:
 - `id` (na URL): O ID do filme.
- **Resposta**: Objeto contendo informações do filme ou uma mensagem de erro se o filme não for encontrado.

### Adicionar Novo Filme

- **POST** `/filmes`
- **Descrição**: Adiciona um novo filme à lista.
- **Corpo da Requisição** (JSON):
 {
   "nome": "Nome do Filme",
   "duracao": 2.0,
   "avaliacaoGeral": 4,
   "avaliacaoPessoal": 5,
   "genero": "Ação"
 }
- **Resposta**: Mensagem de sucesso com os dados do filme adicionado ou uma mensagem de erro se houver falha na validação.

### Atualizar Filme Existente

- **PUT** `/filmes/:id`
- **Descrição**: Atualiza dados de um filme existente.
- **Parâmetros**:
 - `id` (na URL): O ID do filme a ser atualizado.
- **Corpo da Requisição** (JSON):
 {
   "nome": "Nome Atualizado do Filme",
   "duracao": 1.5,
   "avaliacaoGeral": 3,
   "avaliacaoPessoal": 4,
   "genero": "Comédia"
 }
- **Resposta**: Mensagem de sucesso com os dados do filme atualizado ou uma mensagem de erro se o filme não for encontrado ou houver falha na validação.

### Excluir Filme

- **DELETE** `/filmes/:id`
- **Descrição**: Remove um filme da lista com base no ID fornecido.
- **Parâmetros**:
 - `id` (na URL): O ID do filme a ser removido.
- **Resposta**: Mensagem de sucesso ou uma mensagem de erro se o filme não for encontrado.