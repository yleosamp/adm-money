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

  if(props.isShow) {
    return (
      <div className={ style.modal_background } >
        <div className={ style.modal_options } >
          <h1>Adicionar entrada</h1>

          <form>
            <input type="text" name="titulo" placeholder="Título" onChange={ (e) => setTitle(e.currentTarget.value) }/>

            <div className={ style.valueAndDate }>
              <input type="number" name="valor" placeholder="Valor" value={ 0 } onChange={ (e) => setValue(parseFloat(e.currentTarget.value)) } style={{ marginRight: '10px' }}/>
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