import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from 'ui-kit';
import { RootState } from '../rootReducer';

const Title = () => {
    const dispatch = useDispatch();
    const text = useSelector((state: RootState) => {
        return state.inputTextReducer.text
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(inputText(e.target.value))
    }
    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type="text" onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Title;
