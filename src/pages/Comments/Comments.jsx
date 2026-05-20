import { useGetCommentsQuery} from '../../redux/comments/commentsOperation'
import { useParams } from 'react-router-dom'
import { CommentsListItem } from '../../components/CommentsListItem/CommentsListItem'
import { CommentsForm } from '../../components/CommentsForm/CommentsForm'
import { useState } from 'react'
import { Model } from '../../components/Model/Model'
export const Comments = () => {
    const {id} = useParams()
    const { data } = useGetCommentsQuery(id)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const togleModule = () => {
        setIsOpenModal(!isOpenModal)
    }
    
    return<> 
    <button type='button'onClick={togleModule}> add comment</button>
    <ul>
    {data?.results.map(({_id, author, email, comments, rating })=>
    <CommentsListItem key={_id} _id={_id} author={author} email={email} comments={comments} rating={rating}/>)}
    </ul>
    {isOpenModal && <Model togleModule={togleModule}><CommentsForm togleModule={togleModule}/></Model>}
    </>
}