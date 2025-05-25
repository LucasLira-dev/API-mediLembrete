import { consulta } from "./../database/conexao.js";

class medicamentosRepository {
  create(nome, dosagem, horario, userId) {
    const sql = `INSERT INTO dados_medicamento (nome_medicamento, dosagem_medicamento, horarios_medicamento, userId) VALUES (?, ?, ?, ?)`;
    return consulta(sql, [nome, dosagem, horario, userId], 'Não foi possivel cadastrar o medicamento!')
  }

  findAll() {
    const sql = "SELECT * FROM dados_medicamento";
    return consulta(sql, '', 'Não foi possivel localizar os medicamentos!')
  }

  //retorna os medicamentos de um usuário
  findByUserId(userId) {
    const sql = `SELECT * FROM dados_medicamento WHERE userId = ?`;
    return consulta(sql, [userId], 'Não foi possivel localizar os medicamentos pelo ID do usuário!')
  }

  findById(id) {
    const sql = `SELECT * FROM dados_medicamento WHERE id = ?`;
    return consulta(sql, [id], 'Não foi possivel localizar o medicamento pelo ID!')
  }

  update(id, nome, dosagem, horario) {
    const sql = `UPDATE dados_medicamento SET nome_medicamento = ?, dosagem_medicamento = ?, horarios_medicamento = ? WHERE id = ?`;     
    return consulta(sql, [nome, dosagem, horario, id], 'Não foi possivel atualizar o medicamento!')
  }
  
  delete(id) {
    return consulta(`DELETE FROM dados_medicamento WHERE id = ?`, [id], 'Não foi possivel deletar o medicamento!')
  }
}

export default new medicamentosRepository();
