import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from 'ui-kit';

const SingleComment = ({data}:any) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    const {text, id} = data
    useEffect(()=> {
        if(text) {
            setCommentText(text)
        }
    }, [text])

    const handleCommentChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value)
        
    }

    const handleDelete = (e:React.MouseEvent<HTMLDivElement>) => {
        dispatch(deleteComment(id))
    }

    return (
        <form className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type="text" value={commentText} onChange={handleCommentChange}/>
            <input type="submit" hidden/>
        </form>
    );
}

export default SingleComment;
