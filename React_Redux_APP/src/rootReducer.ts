import { combineReducers } from "redux";
import {likesReducer} from 'ui-kit';
import {inputTextReducer} from "ui-kit";
import {commentReducers} from "ui-kit";
import {appReducer} from 'ui-kit'

export const rootReducer = combineReducers({
  likesReducer,
  inputTextReducer,
  commentReducers,
  appReducer
});

export type RootState = ReturnType<typeof rootReducer>