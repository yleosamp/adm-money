import axios, { AxiosResponse } from "axios"
import { ReactNode, useState } from "react"
import style from "./styles/modal.module.css"

type Props = {
  isShow: boolean
}

const Modal = (props: Props) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const createEntry = (ev) => {
    //ev.preventDefault()

    axios.post("http://localhost:3000/api/gain", {
      title: title,
      gain: value,
      date: date,
      category1: "Ganho",
      category2: category,
      month: "Teste",
      spent: 0
    })
    .then((response) => {
      console.log("Entrada adicionada com sucesso!")
    })
  }

  // FAZER O CALCULO DO MES!
  // EXEMPLO: 11/02/2023. O MONTH VAI TER QUE SEI FEVEREIRO!
  // DICA, PARA NÃO ESQUECER: DIVIDIR A STRING COM SPLIT, PEGAR O ÍNDICE 1
  // E FAZER UM SWITCH, DAI O RESTO JÁ VOU LEMBRAR!!

  if(props.isShow) {
    return (
      <div className={ style.modal_background } >
        <div className={ style.modal_options } >
          <h1>Adicionar entrada</h1>

          <form onSubmit={ (ev) => createEntry(ev) }>
            <input type="text" name="titulo" placeholder="Título" onChange={ (e) => setTitle(e.currentTarget.value) }/>

            <div className={ style.valueAndDate }>
              <input type="number" name="valor" placeholder="Valor"  onChange={ (e) => setValue(parseFloat(e.currentTarget.value)) } style={{ marginRight: '10px' }}/>
              <input type="date" name="data" placeholder="Data" onChange={ (e) => setDate(e.currentTarget.value) } />
            </div>

            <input type="text" name="categoria" placeholder="Categoria" onChange={ (e) => setCategory(e.currentTarget.value) } />
            <input type="submit" value="Adicionar" className={ style.submit } />
          </form>

        </div>
      </div>
    )
  }

  return null
}

export default Modal