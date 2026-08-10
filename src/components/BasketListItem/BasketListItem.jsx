import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import * as SC from './BasketLisItem.styled'
import { useState } from "react";
export const BasketListItem = ({id, title, image, price, count, getTotalPrice}) => {

  const [basket, setBasket] = useState({id, title, image, price, count})

  const IncrementCount = (event) => {
    const basketCount = JSON.parse(localStorage.getItem('basket'))??[]
    const findByID = basketCount.find(product => product.id == id)
    const filtredCount = basketCount.filter(product => product.id != id)
    if(event.currentTarget.name === 'increment') {
      findByID.count = basket.count+1
    }else{
     findByID.count = basket.count-1
    }
    const saveToStorage = [...filtredCount, findByID]
    localStorage.setItem('basket', JSON.stringify(saveToStorage))
    const totalPrice = saveToStorage.reduce((acc, item) => {acc = acc + (item.price * item.count);
      return acc
    }, 0)
    setBasket(findByID)
    getTotalPrice(totalPrice)
  }
  
  
  return <SC.LiStyled>
       <SC.ImgStyled src={basket.image} alt={basket.title}/>
       <SC.H1Styled>{basket.title}</SC.H1Styled>
       
      <SC.DivStyled>
        <SC.buttonStyled type="button" onClick={IncrementCount} name="increment"><FaArrowUp fill={'green'}/></SC.buttonStyled>
        <p>count: {basket.count}</p>
        <SC.buttonStyled type="button" onClick={IncrementCount} name="dicriment" disabled={basket.count===1}><FaArrowDown fill={'red'}/></SC.buttonStyled>
      </SC.DivStyled>
      <p>Price: ${(+basket.price * +basket.count).toFixed(2)}</p>
    </SC.LiStyled>
}