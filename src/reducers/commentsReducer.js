import * as types from '../actions/actionTypes';


const initialState = {
  comments: [],
  isLoading: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.comments,
      };

    case types.SAVE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };

    default:
      return state;
  }
}
