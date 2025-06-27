// import mysql from "mysql2";
// import dotenv from "dotenv";

// dotenv.config();

// const conexao = mysql.createConnection({
  
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });



// //fazer a conexão com o banco de dados
// conexao.connect((erro) => {
//   if (erro) {
//     console.log(erro);
//   }

//   console.log("Conectado ao banco de dados!");
// });

// export const consulta = (sql, valores='', mensagemReject) => {
//   return new Promise((resolve, reject) => {
//     conexao.query(sql, valores, (erro, resultado) => {
//       if (erro) return reject(mensagemReject);

//       const row = JSON.parse(JSON.stringify(resultado));
//       return resolve(row);
//     });
//   });
// };

// export default conexao;


import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Cria um pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("✅ Conectado ao banco de dados via pool!");

// Função de consulta genérica - CORRIGIDA
export const consulta = async (sql, valores = [], mensagemReject = "Erro na consulta") => {
  try {
    const [rows] = await pool.query(sql, valores);
    return rows;
  } catch (erro) {
    console.error("Erro na consulta:", erro);
    throw new Error(mensagemReject);
  }
};

export default pool;