import { INPUT_TEXT } from "../types";

const initialState = {
    text: '',
  };
  
  const inputTextReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case INPUT_TEXT:
        return {
          ...state,
          text: action.text
        };
  
      default:
        return state;
    }
  };

  export default inputTextReducer;