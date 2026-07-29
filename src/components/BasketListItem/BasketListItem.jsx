import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
export const BasketListItem = ({id, title, image, price, count}) => {
  return <li >
      <h1>{title}</h1>
      <img src={image} alt={title}/>
      <p>Price: ${+price * +count}</p>
      <div>
        <FaArrowUp/>
        <p>count: {count}</p>
        <FaArrowDown/>
      </div>
    </li>
}