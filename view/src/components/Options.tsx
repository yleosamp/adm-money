import axios from "axios"
import style from "./styles/options.module.css"
import Modal from "./Modal"

const Options = () => {
  return (
    <>
      <div className={ style.options }>
        <div className={ style.buttons }>
          <button className={ style.greenButton }><a href="#" >Adicionar entrada</a></button>
          <button className={ style.redButton }><a href="#">Adicionar gasto</a></button>
        </div>

        <Modal isShow={true} />

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
          <h3>R$ 000</h3>
        </div>
      </div>
    </>
  )
}

export default Options