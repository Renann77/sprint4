// pages/api/carros.ts
import { NextApiRequest, NextApiResponse } from "next";
import oracledb from "oracledb";

const dbConfig = {
  user: "RM557820",
  password: "211005",
  connectString: "oracle.fiap.com.br:1521/ORCL",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("Conexão com OracleDB estabelecida!");

    if (req.method === "GET") {
      const result = await connection.execute(
        "SELECT * FROM carros",
        [],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      console.log("GET executado com sucesso.");
      res.status(200).json(result.rows);
    } else if (req.method === "POST") {
      const { marca, modelo, ano } = req.body as {
        marca: string;
        modelo: string;
        ano: number;
      };
      await connection.execute(
        "INSERT INTO carros (marca, modelo, ano) VALUES (:marca, :modelo, :ano)",
        [marca, modelo, ano]
      );
      await connection.commit();
      console.log("POST executado com sucesso.");
      res.status(201).json({ message: "Carro adicionado com sucesso!" });
    } else if (req.method === "PUT") {
      const { id, marca, modelo, ano } = req.body as {
        id: number;
        marca: string;
        modelo: string;
        ano: number;
      };
      await connection.execute(
        "UPDATE carros SET marca = :marca, modelo = :modelo, ano = :ano WHERE id = :id",
        [marca, modelo, ano, id]
      );
      await connection.commit();
      console.log("PUT executado com sucesso.");
      res.status(200).json({ message: "Carro atualizado com sucesso!" });
    } else if (req.method === "DELETE") {
      const { id } = req.body as { id: number };
      await connection.execute("DELETE FROM carros WHERE id = :id", [id]);
      await connection.commit();
      console.log("DELETE executado com sucesso.");
      res.status(200).json({ message: "Carro excluído com sucesso!" });
    } else {
      console.log("Método não permitido.");
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    console.error("Erro na operação:", error);
    res.status(500).json({ message: `Erro: ${error}` });
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log("Conexão fechada.");
      } catch (e) {
        console.error("Erro ao fechar conexão:", e);
      }
    }
  }
}
