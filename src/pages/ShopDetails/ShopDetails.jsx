import { useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "../../redux/products/productsOperation"
import * as SC from './Details.styled'
export const ShopDetails = () => {
    const {id} = useParams()
    console.log('id', id)
    const {data} = useGetSingleProductQuery(id)
   console.log('data', data)
    return <>
    <img src={data?.image} alt={data?.title} />
   <SC.h2Styled> {data?.title}</SC.h2Styled>
   <p> About: {data?.description}</p>
   <p>Price: ${data?.price}</p>
   <p>Count: {data?.rating.count}</p>
   <p>Rate:{data?.rating.rate}</p>
    </>
}