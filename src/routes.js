import { Router } from "express";

import MedicamentosController from './app/controllers/MedicamentosController.js';

const router = Router();

//adicionar usuario
router.post('/usuario', UsuariosController.store)
//retornar todos os medicamentos
router.get('/medicamento', MedicamentosController.index)
//retornar um medicamento pelo id
router.get('/medicamento/:id', MedicamentosController.show)
//inserir um medicamento
router.post('/medicamento', MedicamentosController.store)
//atualizar um medicamento
router.put('/medicamento/:id', MedicamentosController.update)
//deletar um medicamento
router.delete('/medicamento/:id', MedicamentosController.delete)

export default router;