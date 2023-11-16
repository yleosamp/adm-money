import axios from "axios"
import style from "./styles/options.module.css"
import Modal from "./Modal"
import { useEffect, useState } from "react"
import Items from "./Items"

const Options = () => {
  const [modal, setModal] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0)
  const [month, setMonth] = useState("Outubro")

  useEffect(() => {
    axios.post("http://localhost:3000/api/list", {
      month: month
    })
    .then(response => {
      const money = response.data
      const arrLength = money.length - 1
      setTotalMoney(money[arrLength].totalmoney)
      console.log(totalMoney)
    })
  }, [month])

  return (
    <>
      <div className={ style.options }>
        <div className={ style.buttons }>
          <button className={ style.greenButton } onClick={ () => setModal(!modal) }><a href="#" >Adicionar entrada</a></button>
          <button className={ style.redButton } onClick={ () => setModal(!modal) }><a href="#">Adicionar gasto</a></button>
        </div>

        <Modal isShow={modal} />

        <div className={ style.months }>
          <h3>Selecione um mês</h3>
          <div className={ style.selections }>
            <button onClick={ () => setMonth("Janeiro") }>Janeiro</button>
            <button onClick={ () => setMonth("Fevereiro") }>Fevereiro</button>
            <button onClick={ () => setMonth("Março") }>Março</button>
            <button onClick={ () => setMonth("Abril") }>Abril</button>
            <button onClick={ () => setMonth("Maio") }>Maio</button>
            <button onClick={ () => setMonth("Junho") }>Junho</button>
            <button onClick={ () => setMonth("Julho") }>Julho</button>
            <button onClick={ () => setMonth("Agosto") }>Agosto</button>
            <button onClick={ () => setMonth("Setembro") }>Setembro</button>
            <button onClick={ () => setMonth("Outubro") }>Outubro</button>
            <button onClick={ () => setMonth("Novembro") }>Novembro</button>
            <button onClick={ () => setMonth("Dezembro") }>Dezembro</button>
          </div>
        </div>

        <div className={ style.saldo }>
          <h2>Saldo</h2>
          <h3>R$ { totalMoney }</h3>
        </div>
      </div>

      <Items selectedMonth={month} />
    </>
  )
}

export default Options