import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/authOperations"
import * as SC from './register.styled'
// import { useEffect } from "react"

export const Register = () => {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const handleNameChange = (event) =>{
    //    setName(event.target.value);
       
    // }
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }
    // const handlePassChange = (event) => {
    //     setPassword(event.target.value)
    // }
    const dispatch = useDispatch()
    const handleSubmit = async (event) =>{
        event.preventDefault()
          const result = await dispatch(register({
            name,
            email,
            password
        })).unwrap()
        localStorage.setItem('token', result.token)
    } 
    const handleInputChange = (event) => {
        const {name, value} = event.target
        switch(name){
            case 'name': 
            setName(value)
            return
            case 'email':
            setEmail(value)
            return
            case 'password':
            setPassword(value)
            return
            default: return     
        }
        
    }
    return <>
    <SC.formStyled  onSubmit={handleSubmit}>
    <SC.inputStyled  type='text' name = 'name' value = {name} onChange={handleInputChange} placeholder="name"/>
    <SC.inputStyled  type='text' name = 'email' value = {email} onChange={handleInputChange} placeholder="email"/>
    <SC.inputStyled  type='password' name = 'password' value = {password} onChange={handleInputChange} placeholder="password"/>
    <button type='submit'>
        register
    </button>
    </SC.formStyled>
    </>
}