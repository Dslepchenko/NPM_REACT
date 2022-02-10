import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes, decrementLikes } from 'ui-kit';
import { RootState } from '../rootReducer';

const Likes = () => {
    const dispatch = useDispatch();
    const hanldeIncrement = () => {
        dispatch(incrementLikes())
    }
    const hanldeDecrement = () => { 
        dispatch(decrementLikes())
    }
    const likes = useSelector((state: RootState) => {
        const {likesReducer } = state;
        return likesReducer.likes
    })
    return (
        <div className='button-controls'>
            <button onClick={hanldeIncrement}>♥ {likes}</button>
            <button onClick={hanldeDecrement}>Dislike</button>
        </div>
    );
}


export default Likes;
