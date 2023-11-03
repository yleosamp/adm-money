import style from "./styles/modal.module.css"

type Props = {
  isShow: boolean
}

const Modal = (props: Props) => {
  if(props.isShow) {
    return (
      <div className={ style.modal_background }>
        <div className={ style.modal_options }>Modal</div>
      </div>
    )
  }

  return null
}

export default Modal