import UsuariosRepository from '../repositories/UsuariosRepository.js';

class UsuariosController {
    async store(req, res) {
        const { email, senha } = req.body;
        try {
            const row = await UsuariosRepository.create(email, senha);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao cadastrar usuário' });
        }
    }
}