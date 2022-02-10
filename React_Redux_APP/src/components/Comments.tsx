import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import { createCommentText, commentsLoad } from 'ui-kit';
import { RootState } from '../rootReducer';

const Comments: React.FC = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => {
        return state.commentReducers.comments
    })

    const [textComment, setTextComment] = useState('')
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(100000 + Math.random() * 900000);
        dispatch(createCommentText(textComment, id ))
        setTextComment('')
        
    }
    useEffect(() => {
        dispatch(commentsLoad());
    },[dispatch])
  
    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map((comment: any) => {
               return <SingleComment key={comment.id} data={comment}/>
            })}
            
            
        </div>
    );
}

export default Comments;
