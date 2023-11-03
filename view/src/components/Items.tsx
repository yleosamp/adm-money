import axios from "axios"
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import style from "./styles/items.module.css"


const Items = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 15,
    },
  })

  return (
    <>
      <div className="entries">
        <div className={ style.entry }>
          <h2 className={ style.title }>Lancheria</h2>
          <p style={{ marginBottom: '36px', }} className={ style.date }>12 de fevereiro de 2023</p>

          <p style={{ marginBottom: '-8px' }} className={ style.beforeAndAfter }>Antes: R$ 1200</p>
          <h2 style={{ marginBottom: '20px', color: '#A93333' }} className={ style.money }>R$ -112</h2>
          <p className={ style.beforeAndAfter }>Depois: R$ 1088</p>

          <div ref={ ref } className={`keen-slider ${style.category}`}>
            <div className={`keen-slider__slide number-slide1`}>
              <p>Gasto</p>
            </div>
            <div className="keen-slider__slide number-slide2">
              <p>Comida</p>
            </div>
            <div className="keen-slider__slide number-slide3">
              <p>Lazer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Items