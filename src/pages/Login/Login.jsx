import { useState } from "react"
import { useDispatch } from "react-redux"
import {login} from "../../redux/auth/authOperations"
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import * as SC from './login.styled'
export const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[isShowPass, setShowPass] = useState(false) 
     
    const handleShowPass = () => {
        setShowPass(!isShowPass)
    }
    
    const handleInputChange = (event) => {
        const{name, value} = event.target
        switch(name){
            case 'email':
            setEmail(value)
            return
            case 'password':
            setPassword(value)
            return
            default: return

        }
    }
    const dispatch = useDispatch()
    const handleSubmit = async(event) => {
       event.preventDefault()
       const result = await dispatch(login({
        email,
        password
       })).unwrap()
       localStorage.setItem('token', result.token)
    }
    
    return <>
    <SC.formStyled onSubmit={handleSubmit}>
    <SC.inputStyled  type='text' name='email' value = {email} onChange={handleInputChange} placeholder="Email"/> 
    <div >
     <SC.inputStyled   type={isShowPass?'password':'text'} name='password' value = {password} onChange={handleInputChange} placeholder="Password"/>
     <button  type="button" onClick={handleShowPass}>{isShowPass?<TbEye/>:<TbEyeClosed/>}</button>
    </div>
    <button type='submit'>
        login
    </button>
    </SC.formStyled>
    </>
}