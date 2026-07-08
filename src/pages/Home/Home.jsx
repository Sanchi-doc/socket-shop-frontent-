import PaginatedItems from '../../components/Paginate/Paginate'
import { useSearchParams } from "react-router-dom"
import { TestComponent } from '../../components/TestComponent/TestComponent'
import { useGetCategoriesQuery } from '../../redux/products/productsOperation'
import { ProductListItem } from '../../components/productListItem/productListItem'
import * as SC from './home.styled'
export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageNumber = Number(searchParams.get('page') ?? 1)
    const {data} = useGetCategoriesQuery()
    return <SC.NavWrap>
        <ul>
        {data?.data.map(({id, category, img }) => 
        <ProductListItem id={id} category={category} img={img}/>)}
        </ul>
    </SC.NavWrap>
}       