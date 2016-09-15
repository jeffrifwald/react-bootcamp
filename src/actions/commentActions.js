import commentAPI from '../api/mockCommentAPI';
import * as types from './actionTypes';

export function loadCommentsRequest() {
  return { type: types.LOAD_COMMENTS_REQUEST };
}

export function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function loadCommentsError(error) {
  return { type: types.LOAD_COMMENTS_ERROR, error };
}

export function loadComments() {
  return (dispatch) => {
    dispatch(loadCommentsRequest());
    return commentAPI.getAllComments().then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      dispatch(loadCommentsError(error));
    });
  };
}


export function saveCommentRequest() {
  return { type: types.SAVE_COMMENT_REQUEST };
}

export function saveCommentSuccess(comment) {
  return { type: types.SAVE_COMMENT_SUCCESS, comment };
}

export function saveCommentError(error) {
  return { type: types.SAVE_COMMENT_ERROR, error };
}

export function saveComment(comment) {
  return (dispatch) => {
    dispatch(saveCommentRequest());
    return commentAPI.saveComment(comment).then(savedComment => {
      dispatch(saveCommentSuccess(savedComment));
    }).catch(error => {
      dispatch(saveCommentError(error));
    });
  };
}
