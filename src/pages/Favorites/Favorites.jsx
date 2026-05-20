import { useGetFavoritesQuery } from "../../redux/films/favoriteOperations"
import { MovieList } from "../../components/MovieList/MovieList";
import { toast } from 'react-toastify'
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NavLink, useSearchParams } from "react-router-dom";
import PaginatedItems from "../../components/Paginate/Paginate";
export const Favorites = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageNumber = Number(searchParams.get('page') ?? 1)
    const { data } = useGetFavoritesQuery({page: pageNumber, limit: 20})
    const { isLoggedIn } = useAuth()
    console.log(data);
    

    useEffect(()=> {
        if(data) {
          toast.info(` count of favorite movies: ${data?.results.length}`)
        }
    }, [data])
    
    return <>
    {isLoggedIn && data?.results.length > 0 && <MovieList data={data}/>}
    {data?.total_pages > 0 && <PaginatedItems totalPages={data?.total_pages} currentPage={pageNumber - 1} setPageNumber={setSearchParams}/>}
    {isLoggedIn && data?.results.length === 0 && 'If you want to see your favorite movies, add them.'}
    {!isLoggedIn && 
    <div>
        <p> You need to login first to see your favorites.</p> 
        <NavLink to='/login'> go to login page</NavLink>
        
    </div>}</>
}