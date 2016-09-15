import React, { PropTypes } from 'react';

import Comment from './comment';

const CommentList = ({ comments, isLoading }) => {
  const renderedComments = comments.map((comment, i) => (
    <Comment author={comment.author} key={i}>
      <span>{comment.message}</span>
    </Comment>
  ));

  return !isLoading ? (
    <div className="commentList">
      {renderedComments}
    </div>
  ) : (
    <div className="commentLoading">
      <span>Loading comments...</span>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
};

export default CommentList;
