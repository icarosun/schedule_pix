import database from "../infra/database.js";

async function createTable() {
  try {
    await database.query(`
        CREATE TABLE IF NOT EXISTS schedules (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          data DATE NOT NULL,
          time TIME NOT NULL         
        );
      `);
    console.log("Table criada com sucesso!");
  } catch (error) {
    console.error("Error ao criar tabela", error);
  } finally {
    process.exit();
  }
}

createTable();
