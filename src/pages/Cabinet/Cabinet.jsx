import { useEffect, useState } from 'react'
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import { FaFileImage } from "react-icons/fa";
import { useGetUserQuery } from '../../redux/user/userOperation';
import { useUpdateUserMutation } from '../../redux/user/userOperation';
import * as SC from './Cabinel.styled'
export const Cabinet = () => {
    const {data} = useGetUserQuery()
    const [updateUser] = useUpdateUserMutation()
    const [name, setName] = useState(data?.data.name)
    const [email, setEmail] = useState(data?.data.email)
    const [password, setPassword] = useState('')
    const [isShowPass, setShowPass] = useState('')
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [avatar, setAvatar] = useState(data?.data.avatarURL ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ppju8tTn4IzyKO7V0R-75-gTMb3q0DzFkdqErMhhhkT1dpuJdSDDu9g&s=10')
    
    useEffect(()=>{
        setName(data?.data.name)
        setEmail(data?.data.email)
        setAvatar(data?.data.avatarURL)
    },[data])
    
    const handleShowPass = () => {
        setShowPass(!isShowPass)
    }

    const handleInputChange = (event) => {
       const {name, value, files} = event.target
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
        case 'avatar':
        setAvatarUrl(files[0])
        return
        default: return    
       }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // updateUser({name, email})
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append("avatar", avatarUrl? avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ppju8tTn4IzyKO7V0R-75-gTMb3q0DzFkdqErMhhhkT1dpuJdSDDu9g&s=10")
        updateUser(formData)
    }

    return <>
    <SC.h2Styled>Cabinet</SC.h2Styled>
    <SC.formStyled onSubmit={handleSubmit}>
    <SC.LabelImageWraper>
        <label>
        <SC.spanStyled>Upload a photo</SC.spanStyled>
        <SC.divImageStyled>
                <FaFileImage fill='brown'/>
            </SC.divImageStyled>
            <SC.inputFileStyled type='file' accept='image/*, .png, .jpeg, .webp ' name='avatar' onChange={handleInputChange} />
        </label>
    {!avatarUrl?<SC.imageStyle src={avatar} alt="cabinet"/>: <SC.imageStyle src={URL.createObjectURL(avatarUrl)} alt="cabinet"/>}
    </SC.LabelImageWraper>
    <SC.divStyled>
        <SC.paragrafStyled>Name: {name}</SC.paragrafStyled>
    <SC.inputStyled type="text" name="name" value={name} placeholder="change your name" onChange={handleInputChange} />
        <SC.paragrafStyled>Email: {email}</SC.paragrafStyled>
    <SC.inputStyled type="text" name='email' value={email} placeholder="change your email" onChange={handleInputChange} />
     <SC.passStyled>
        <SC.paragrafStyled>Password</SC.paragrafStyled>
      <SC.inputStyled type={isShowPass?'password': 'text'} name="password"  value={password} placeholder="change your password" onChange={handleInputChange}/>
      <SC.hideButtonStyled type='button' onClick={handleShowPass}>{isShowPass?<TbEye/>:<TbEyeClosed/>}</SC.hideButtonStyled>
     </SC.passStyled>
     <SC.buttonStyled type='submit'>Save</SC.buttonStyled>
    </SC.divStyled>
    </SC.formStyled></>
}