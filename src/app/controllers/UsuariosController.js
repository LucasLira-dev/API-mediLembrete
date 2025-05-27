import UsuariosRepository from '../repositories/UsuariosRepository.js';
import bcrypt from 'bcryptjs';

class UsuariosController {
    async store(req, res) {
        const { email, senha } = req.body;
        try {
            const senhaCriptografada = await bcrypt.hash(senha, 10); // Criptografa a senha
            const resultado = await UsuariosRepository.create(email, senhaCriptografada);
            res.status(201).json({
                userId: resultado.insertId
            });
        } catch (error) {
            if (error.message === 'Email já cadastrado!') {
                return res.status(400).json({ error: 'Email já cadastrado' });
            }
            res.status(500).json({ error: error.message || 'Erro ao cadastrar usuário' });
        }
    }
}

export default new UsuariosController();