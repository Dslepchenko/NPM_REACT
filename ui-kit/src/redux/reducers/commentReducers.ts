import { COMMENTS_LOAD, COMMENT_TEXT, DELETE_COMMENT} from "../types";

const initialState = {
    comments: []
  };
  
  const commentReducers = (state = initialState, action: any) => {
    console.log('comments_reducer>>>>>>>>', action);
    switch (action.type) {
      case COMMENT_TEXT:
        return {
          ...state,
          comments: [...state.comments, action.data]
        };
        case DELETE_COMMENT:
          const {id} = action;
          const {comments} = state;
          const commentsUpdate = comments.filter((res: any) => res.id !== id)

          return {
            ...state,
            comments: commentsUpdate
          };
          case COMMENTS_LOAD:
            const newComments = action.data.map((res: any) => {
              return {
                text: res.name,
                id: res.id
              }
            })
            return {
              ...state,
              comments: newComments
            }


      default:
        return state;
    }
  };

  export default commentReducers;