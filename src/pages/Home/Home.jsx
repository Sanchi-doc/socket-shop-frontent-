import { MovieList } from "../../components/MovieList/MovieList"
import { useGetPopularMovieQuery } from "../../redux/films/filmOperations"
import PaginatedItems from '../../components/Paginate/Paginate'
import { useSearchParams } from "react-router-dom"
export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageNumber = Number(searchParams.get('page') ?? 1) 
    const {data} = useGetPopularMovieQuery(pageNumber)
    console.log(data);
    
    return <>
      <MovieList data={data}/>
      <PaginatedItems totalPages={data?.total_pages} currentPage={pageNumber - 1} setPageNumber={setSearchParams}/>
    </>
    
}