import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conexao = mysql.createConnection({
  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
