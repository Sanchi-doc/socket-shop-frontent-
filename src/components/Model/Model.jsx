import { useEffect } from 'react'
import styles from './model.module.css'
export const Model = ({togleModule, children}) => {
    const handleClose = (event) => {
        if(event.target === event.currentTarget){
            togleModule()
        }
    }
    useEffect(() => {
       const closeByEsc = (event) =>  {
            
        if (event.code === 'Escape'){
          togleModule()    
        }
    }
       window.addEventListener('keydown', closeByEsc) 
       return () => {
        window.removeEventListener('keydown', closeByEsc)
       }
    },[])

    return <div  onClick={handleClose}>
        <div>
            {children}
            <button  type="button" onClick={togleModule}>x</button>
        </div>
    </div>
}