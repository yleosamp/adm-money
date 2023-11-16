import axios from "axios"
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import style from "./styles/items.module.css"
import { useEffect, useState } from "react"


const Items = () => {
  const [items, setItems] = useState([])

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 1,
    },
  })

  useEffect(() => {
    axios.post("http://localhost:3000/api/list", {
      month: "Setembro"
    })
    .then(response => {
      const itemObject = response.data
      
      setItems(itemObject)
      console.log(items)
    })
  }, [])

  return (
    <>
      <div className={ style.entries }>

        {
          items.map((item) => (
            <div className={ style.entry }>
              <h2 className={ style.title }>{ item.title }</h2>
              <p style={{ marginBottom: '36px', }} className={ style.date }>{ item.date }</p>
    
              <p style={{ marginBottom: '-8px' }} className={ style.beforeAndAfter }>Antes: R$ { item.beforemoney }</p>
              <h2 style={{ marginBottom: '20px', color: '#A93333' }} className={ style.money }>R$ { item.spent ? item.spent : item.gain }</h2>
              <p className={ style.beforeAndAfter }>Depois: R$ { item.aftermoney }</p>
    
              <div ref={ ref } className={`keen-slider ${style.category}`}>
                <div className={`keen-slider__slide number-slide1`}>
                  <p>{ item.spent ? "Gasto" : "Ganho" }</p>
                </div>
                <div className="keen-slider__slide number-slide2">
                  <p>{ item.category2 }</p>
                </div>
                {/* 
                <div className="keen-slider__slide number-slide3">
                  <p>Lazer</p>
                </div> 
                */}
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Items