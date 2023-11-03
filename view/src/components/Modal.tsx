import style from "./styles/modal.module.css"

type Props = {
  isShow: boolean
}

const Modal = (props: Props) => {
  if(props.isShow) {
    return (
      <div className={ style.modal_background } >
        <div className={ style.modal_options } >
          <h1>Adicionar entrada</h1>
          <form>
            <input type="text" name="titulo" placeholder="Título" />

            <div className={ style.valueAndDate }>
              <input type="number" name="valor" placeholder="Valor" style={{ marginRight: '10px' }}/>
              <input type="date" name="data" placeholder="Data" />
            </div>

            <input type="text" name="categoria" placeholder="Categoria" />
            <input type="submit" value="Adicionar" className={ style.submit } />
          </form>
        </div>
      </div>
    )
  }

  return null
}

export default Modal