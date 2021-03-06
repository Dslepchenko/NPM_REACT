import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from "../types";

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
      
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default appReducer;
