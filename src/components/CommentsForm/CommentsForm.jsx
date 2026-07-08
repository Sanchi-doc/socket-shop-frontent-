import { useAuth } from "../../hooks/useAuth"
import { useDeleteCommentsMutation } from '../../redux/comments/commentsOperation'
import { toast } from 'react-toastify'
import styles from './commentsListItem.module.css'
import { EditCommentsForm } from "../EditCommentsForm/EditCommentsForm"
import { Model } from "../Model/Model"
import { useState } from 'react'
export const CommentsListItem = ({_id, author, comments, rating, email}) => {
    const {user} = useAuth()
    const [deleteComment] = useDeleteCommentsMutation()
    const [isOpenModule, setIsOpentModule] = useState(false)
    
    
    const togleModule = () => {
       setIsOpentModule(!isOpenModule)
    }

    const handleDelete = async () => {
        await deleteComment(_id)
        toast.info(`comment:${comments} has been deleted`)
    }
    
    return <li >
        <p >
          author: {author}  
        </p>
        <p>
            comments: {comments}
        </p>
        <p>
            rating: {rating}
        </p>
        {email === user.email && <button type='button' onClick={handleDelete}>delete</button>}
        {email === user.email && <button type="button " onClick={togleModule}>edit</button>}
        {isOpenModule && <Model togleModule={togleModule}><EditCommentsForm togleModule={togleModule} _id={_id}  comments={comments} rating={rating} 
        /></Model>}
    </li>
}