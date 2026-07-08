import { useState } from 'react'
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import { useGetUserQuery } from '../../redux/user/userOperation';
import * as SC from './Cabinel.styled'
export const Cabinet = () => {
    const {data} = useGetUserQuery()
    const [name, setName] = useState(data?.data.name)
    const [email, setEmail] = useState(data?.data.email)
    const [password, setPassword] = useState('')
    const [isShowPass, setShowPass] = useState('')

    const handleShowPass = () => {
        setShowPass(!isShowPass)
    }

    const handleInputClick = (event) => {
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
    return <form>
    <SC.h2Styled>Cabinet</SC.h2Styled>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAR7BKsMrNciKv1aWcwx84hQ1wJibKZZy1XjyxUNH5w&s=10" alt="cabinet"/>
    <div>
    <input type="text" name="name" value={name} placeholder="change your name"/>
    <input type="text" name='email' value={email} placeholder="change your email"/>
    <div>
     <input type={isShowPass?'password': 'text'} name="password"  value={password} placeholder="change your password"/>
     <button type='button' onClick={handleShowPass}>{isShowPass?<TbEye/>:<TbEyeClosed/>}</button>
    </div>
    <button type='submit'>Save</button>
    </div>
    </form>
}