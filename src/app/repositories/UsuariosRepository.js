import { consulta } from "../database/conexao";

class usuariosRepository {
    create(email, senha) {
        const sql = `INSERT INTO usuarios (email, senha) VALUES (?, ?)`;
        return consulta(sql, [email, senha], 'Não foi possivel cadastrar o usuário!')
    }
}