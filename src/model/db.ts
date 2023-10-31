import { Client } from "pg"
require("dotenv").config()
const env = process.env

export const db = new Client({
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: +env.DB_PORT!,
  database: env.DB_DATABASE
})

export const addTable = () => {
  db.query(`CREATE TABLE IF NOT EXISTS money(
    id SERIAL PRIMARY KEY,
    month VARCHAR(30),
    title VARCHAR(100),
    date DATE,
    spent FLOAT,
    gain FLOAT,
    totalMoney FLOAT,
    beforeMoney FLOAT,
    afterMoney FLOAT,
    category1 VARCHAR(30),
    category2 VARCHAR(30)
  );`)
}