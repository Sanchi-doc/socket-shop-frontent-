import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{refresh} from './redux/auth/authOperations'
import {useAuth} from './hooks/useAuth'
import {Layout} from './components/Layout/Layout'
import { Home } from './pages/Home/Home'
import { Login} from './pages/Login/Login'
import { Register} from './pages/Register/Register'
import { Comments} from './pages/Comments/Comments'
import { Favorites} from './pages/Favorites/Favorites'
import {ShopDetails} from './pages/ShopDetails/ShopDetails'
import { About } from './pages/About/About'
import {PrivacyPolicy} from './pages/Privacy-policy/privacy-policy'
import { PrivateRoute } from './components/Routes/PrivateRoute'
import { ResrtictedRoute } from './components/Routes/RestrictedROute'
import { MenClothes } from './pages/MenClothes/MenClothes'
import { WemanClothes } from './pages/WemanClothes/WemanClothes'
import { Jewelery } from './pages/Jewelery/Jewelery'
import { Electronics } from './pages/Electronics/Electronics'
import { Categories } from './pages/Categories/Categories'
import { Cabinet } from './pages/Cabinet/Cabinet'
import { Basket } from './pages/Basket/Basket'
function App() {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])
  return(
    isRefreshing? <></>:
    <Routes>
    <Route path='/' element = {<Layout/>}>
    <Route path='/' element= {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/privacy-policy' element = {<PrivacyPolicy/>}/>
    <Route path='/login' element = {
      <ResrtictedRoute redirectTo='/' component={<Login/>}
      />
    }
    />
    <Route path='register'
       element = {
        <ResrtictedRoute
            redirectTo='/'
            component={<Register/>}
        />
       }
    />
    <Route path='comments' element = {<Comments/>}/>
    <Route path='/details/:id' element = {<ShopDetails/>}/>
    <Route path='/category/:category' element = {<Categories/>}/>
    <Route path='/cabinet' element = {<Cabinet/>}/>
    <Route path='/basket' element = {<Basket/>}/>
    </Route>  
    </Routes>
  )
   
}

export default App
