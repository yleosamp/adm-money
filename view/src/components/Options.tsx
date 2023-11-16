import axios from "axios"
import style from "./styles/options.module.css"
import Modal from "./Modal"
import { useEffect, useState } from "react"

const Options = () => {
  const [modal, setModal] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0)

  useEffect(() => {
    axios.post("http://localhost:3000/api/list", {
      month: "Setembro"
    })
    .then(response => {
      const money = response.data
      const arrLength = money.length - 1
      setTotalMoney(money[arrLength].totalmoney)
      console.log(totalMoney)
    })
  }, [])

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
            <button>Janeiro</button>
            <button>Fevereiro</button>
            <button>Março</button>
            <button>Abril</button>
            <button>Maio</button>
            <button>Junho</button>
            <button>Julho</button>
            <button>Agosto</button>
            <button>Setembro</button>
            <button>Outubro</button>
            <button>Novembro</button>
            <button>Dezembro</button>
          </div>
        </div>

        <div className={ style.saldo }>
          <h2>Saldo</h2>
          <h3>R$ { totalMoney }</h3>
        </div>
      </div>
    </>
  )
}

export default Options