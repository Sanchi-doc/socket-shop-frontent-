import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import * as SC from './BasketLisItem.styled'
import { useState } from "react";
export const BasketListItem = ({id, title, image, price, count}) => {

  const [basket, setBasket] = useState({id, title, image, price, count})

  const IncrementCount = (event) => {
    console.log('event', event.currentTarget.name);
    
    const basketCount = JSON.parse(localStorage.getItem('basket'))??[]
    const findByID = basketCount.find(product => product.id == id)
    const filtredCount = basketCount.filter(product => product.id != id)

    if(event.currentTarget.name === 'increment') {
      findByID.count = basket.count+1
    }else{
     findByID.count = basket.count-1
    }
    console.log('filterCount', filtredCount);
    
    localStorage.setItem('basket', JSON.stringify([...filtredCount, findByID]))
    setBasket(findByID)
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