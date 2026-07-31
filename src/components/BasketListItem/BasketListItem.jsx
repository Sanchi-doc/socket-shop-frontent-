import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import * as SC from './BasketLisItem.styled'
import { useState } from "react";
export const BasketListItem = ({id, title, image, price, count}) => {

  const [isReRender, setIsReRender] = useState(false)

  const IncrementCount = async(event) => {
    console.log('event', event.currentTarget.name);
    
    const basketCount = JSON.parse(localStorage.getItem('basket'))??[]
    const findByID = basketCount.find(product => product.id == id)
    const filtredCount = basketCount.filter(product => product.id != id)
    if(event.currentTarget.name === 'increment') {
      findByID.count = count++
    }else{
     findByID.count = count--
    }
    console.log('filterCount', filtredCount);
    
    await localStorage.setItem('basket', JSON.stringify([...filtredCount, findByID]))
    // setIsReRender(!isReRender)
  }
  
  
  return <SC.LiStyled>
       <SC.ImgStyled src={image} alt={title}/>
       <SC.H1Styled>{title}</SC.H1Styled>
       
      <SC.DivStyled>
        <button type="button" onClick={IncrementCount} name="increment"><FaArrowUp /></button>
        <p>count: {count}</p>
        <button type="button" onClick={IncrementCount} name="dicriment" disabled={count===1}><FaArrowDown /></button>
      </SC.DivStyled>
      <p>Price: ${+price * +count}</p>
    </SC.LiStyled>
}