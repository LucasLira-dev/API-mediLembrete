import UsuariosRepository from '../repositories/UsuariosRepository.js';

class UsuariosController {
    async store(req, res) {
        const { email, senha } = req.body;
        try {
            const resultado = await UsuariosRepository.create(email, senha);
            res.status(201).json({
                userId: resultado.insertId
            });
        } catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao cadastrar usuário' });
        }
    }
}

export default new UsuariosController();