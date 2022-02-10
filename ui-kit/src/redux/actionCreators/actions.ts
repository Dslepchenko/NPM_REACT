import { Dispatch } from "redux";
import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_TEXT,
  DELETE_COMMENT,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF
} from '../types';

const incrementLikes = () => {
  return {
    type: INCREMENT,
  }
};

const decrementLikes = () => {
  return {
    type: DECREMENT,
  }
};

const inputText = (text: String) => {
  return {
    type: INPUT_TEXT,
    text,
  }
};

const createCommentText = (text:String, id:Number) => {
  return {
    type: COMMENT_TEXT,
    data: { text, id },
  }
};

const deleteComment = (id: Number) => {
  return {
    type: DELETE_COMMENT,
    id,
  }
};

  const loaderOn = () => {
      return {
      type: LOADER_DISPLAY_ON
      }
  };

  const loaderOff = () => {
    return {
    type: LOADER_DISPLAY_OFF
    }
};

const commentsLoad = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loaderOn())
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json()
        setTimeout(() => {
            dispatch({
                type: COMMENTS_LOAD,
                data: jsonData
            })
            dispatch(loaderOff())

        },1000)
        
    }
  };


  export {commentsLoad, loaderOff, loaderOn, deleteComment, createCommentText, inputText, decrementLikes, incrementLikes };