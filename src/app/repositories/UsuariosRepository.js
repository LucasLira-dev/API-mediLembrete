import { consulta } from "./../database/conexao.js";

class UsuariosRepository {
    async create(email, senha) {
        const existe = await consulta(
            'SELECT * FROM usuarios WHERE email = ?',
            [email],
            'Erro ao buscar usuário!'
        ); //verifica se o email já existe
        if (existe.length > 0) {
            throw new Error('Email já cadastrado!');
        }

        const sql = `INSERT INTO usuarios (email, senha) VALUES (?, ?)`;
        return consulta(sql, [email, senha], 'Não foi possivel cadastrar o usuário!'); // insere o usuário se não existir
    }
}

export default new UsuariosRepository();