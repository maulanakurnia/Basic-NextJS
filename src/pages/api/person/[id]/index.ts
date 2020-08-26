import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
  if (req.method === "PUT") {
    await db.run(
      "UPDATE person SET name = ?, email = ? where id = ?",
      req.body.name,
      req.body.email,
      req.query.id
    );
  }
  const person = await db.get("select * from person where id = ?", [
    req.query.id,
  ]);
  res.json(person);
}
