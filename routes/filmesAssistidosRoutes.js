import express from 'express';
import { getFilmesAssistidos, getFilmeAssistido, postFilmeAssistido, putFilmeAssistido, deleteFilmeAssistido } from '../controllers/filmesAssistidosControllers.js';

const routes = express.Router();

routes.get('/', getFilmesAssistidos);
routes.get('/:id', getFilmeAssistido);
routes.post('/', postFilmeAssistido);
routes.put('/:id', putFilmeAssistido);
routes.delete('/:id', deleteFilmeAssistido);

export default routes;