import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const conexao = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT_DB,
  user: "root",
  password: process.env.SENHA_DB,
  database: process.env.DB,
});

//fazer a conexão com o banco de dados
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  }

  console.log("Conectado ao banco de dados!");
});

export const consulta = (sql, valores='', mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject);

      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default conexao;
