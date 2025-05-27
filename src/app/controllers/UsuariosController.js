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
    async login(req, res) {
        const { email, senha } = req.body;
        try {
            const usuario = await UsuariosRepository.findByEmail(email);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ error: 'Senha inválida' });
            }
            res.status(200).json({ userId: usuario.userId});
        } catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao fazer login' });
        }
    }
}

export default new UsuariosController();