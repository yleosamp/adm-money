import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import style from "./styles/modal.module.css"

type Props = {
  isShow: boolean
}

const Modal = (props: Props) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const verifyMonth = () => {
    const splittedDate: string[] = date.split("-")
    const monthNumber = splittedDate[2]
    let month: string

    switch(monthNumber) {
      case "01":
        month = "Janeiro"
      break
      case "02":
        month = "Fevereiro"
      break
      case "03":
        month = "Março"
      break
      case "04":
        month = "Abril"
      break
      case "05":
        month = "Maio"
      break
      case "06":
        month = "Junho"
      break
      case "07":
        month = "Julho"
      break
      case "08":
        month = "Agosto"
      break
      case "09":
        month = "Setembro"
      break
      case "10":
        month = "Outubro"
      break
      case "11":
        month = "Novembro"
      break
      case "12":
        month = "Dezembro"
      break
      default: 
        month = "Mês não atribuído"
    }

    return month
  }

  const createEntry = () => {
    //ev.preventDefault()

    if(value > 0) {
      axios.post("http://localhost:3000/api/gain", {
        title: title,
        gain: value,
        date: date,
        category1: "Ganho",
        category2: category,
        month: verifyMonth(),
        spent: 0
      })
      .then( (response: AxiosResponse) => {
        console.log("Entrada adicionada com sucesso!")
      })
    } else {
      axios.post("http://localhost:3000/api/spent", {
        title: title,
        gain: 0,
        date: date,
        category1: "Gasto",
        category2: category,
        month: verifyMonth(),
        spent: value
      })
      .then( (response: AxiosResponse) => {
        console.log("Entrada adicionada com sucesso!")
      })
    }
  }

  if(props.isShow) {
    return (
      <div className={ style.modal_background } >
        <div className={ style.modal_options } >
          <h1>Adicionar entrada</h1>

          <form onSubmit={ () => createEntry() }>
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