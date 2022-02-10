import MyButton from "./MyButton/index";

import {
  commentsLoad,
  loaderOff,
  loaderOn,
  deleteComment,
  createCommentText,
  inputText,
  decrementLikes,
  incrementLikes,
} from "./redux/actionCreators/actions";

import appReducer from "./redux/reducers/appReducer";
import commentReducers from "./redux/reducers/commentReducers";
import inputTextReducer from "./redux/reducers/inputTextReducer";
import likesReducer from "./redux/reducers/likesReducer";




export {
  commentsLoad,
  loaderOff,
  loaderOn,
  deleteComment,
  createCommentText,
  inputText,
  decrementLikes,
  incrementLikes,
  appReducer,
  commentReducers,
  inputTextReducer,
  likesReducer,
  

};
