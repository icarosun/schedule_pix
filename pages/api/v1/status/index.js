import database from "../../../../infra/database.js";

async function status(request, response) {
  try {
    await database.query("SELECT 1;");

    response.status(200).json({ chave: "keep moving forward" });
  } catch (error) {
    console.log("Error ao conectar ao banco de dados:", error);

    response.status(500);
  }
}

export default status;
