import axios from "axios"
import style from "./styles/items.module.css"

const Items = () => {
  return (
    <>
      <div className="entries">
        <div className={ style.entry }>
          <h2 className={ style.title }>Lancheria</h2>
          <p style={{ marginBottom: '36px', }} className={ style.date }>12 de fevereiro de 2023</p>

          <p style={{ marginBottom: '-8px' }} className={ style.beforeAndAfter }>Antes: R$ 1200</p>
          <h2 style={{ marginBottom: '20px', color: '#A93333' }} className={ style.money }>R$ -112</h2>
          <p className={ style.beforeAndAfter }>Depois: R$ 1088</p>

          <div className={ style.category }>
            <div>
              <p>Gasto</p>
            </div>
            <div>
              <p>Comida</p>
            </div>
            <div>
              <p>Lazer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Items