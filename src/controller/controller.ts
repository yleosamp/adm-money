import { Request, Response } from "express";
import { db } from "../model/db";

export const addEntry = async (req: Request, res: Response) => {
  const b = req.body

  const month = b.month
  const title = b.title
  const date = b.date
  const spent = b.spent
  const gain = b.gain

  const category1 = b.category1
  const category2 = b.category2

  try {
    const add = await db.query(`INSERT INTO money(month, title, date, spent, gain, category1, category2)
    VALUES ('${month}', '${title}', '${date}', ${spent}, ${gain}, '${category1}', '${category2}') RETURNING id, spent, gain`)
    add
    const id = add.rows[0].id

    const total = await db.query(`SELECT SUM(gain) + SUM(spent) AS totalmoney FROM money WHERE month = '${month}'`)
    const updateTotal = await db.query(`UPDATE money SET totalmoney = ${total.rows[0].totalmoney} WHERE id = ${id}`)
    updateTotal

    if(id > 1)  {
      const selectBefore = await db.query(`SELECT totalmoney FROM money WHERE month = '${month}' AND id = ${id - 1}`);
      const beforeMoney = selectBefore.rows[0] ? selectBefore.rows[0].totalmoney : null;
      const updatedBeforeMoney = beforeMoney !== null ? beforeMoney : 0;
    
      const selectAfter = updatedBeforeMoney + add.rows[0].spent + add.rows[0].gain;
    
      const updateBefore = await db.query(`UPDATE money SET beforemoney = ${updatedBeforeMoney} WHERE id = ${id}`);
      const updateAfter = await db.query(`UPDATE money SET aftermoney = ${selectAfter} WHERE id = ${id}`);

    } else {
      const updateBefore = await db.query(`UPDATE money SET beforemoney = 0 WHERE id = ${id}`)
      updateBefore

      const selectAfter = 0 + (add.rows[0].spent) + (add.rows[0].gain)
      const updateAfter = await db.query(`UPDATE money SET aftermoney = ${selectAfter} WHERE id = ${id}`)
      updateAfter
    }
    return res.status(201).json({ "ok": "ok" })
  } catch (error) {
    console.log("Erro ao inserir um registro: " + error)
    return res.status(500).json({ erro: error })
  }
}

export const listEntries = async (req: Request, res: Response) => {
  const month = req.body.month
  
  try {
    const listByMonth = await db.query(`SELECT * FROM money WHERE month = '${month}'`)
    return res.status(200).json(listByMonth.rows)
  } catch (error) {
    console.log("Erro ao listar os registros: " + error)
    return res.status(500).json({ erro: error })
  }
}