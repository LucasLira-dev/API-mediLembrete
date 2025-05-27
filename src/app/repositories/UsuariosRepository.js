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
    
    async findByEmail(email) {
        const sql = `SELECT * FROM usuarios WHERE email = ?`;
        const resultado = await consulta(sql, [email], 'Erro ao buscar usuário!');
        return resultado.length > 0 ? resultado[0] : null; // retorna o usuário se encontrado
    }
}

export default new UsuariosRepository();