import React, { PropTypes } from 'react';

const CommentForm = ({ comment, onSave, onChange, isSaving }) => (
  <form className="commentForm" onSubmit={onSave}>
    <input
      className="commentInput"
      name="author"
      onChange={onChange}
      placeholder="Your name..."
      type="text"
      value={comment.author}
    />

    <input
      className="commentInput"
      name="message"
      onChange={onChange}
      placeholder="Your message..."
      type="text"
      value={comment.message}
    />

    <button
      className="commentButton"
      disabled={isSaving}
      type="submit"
    >
      { isSaving ? 'Saving...' : 'Save' }
    </button>
  </form>
);

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
};

export default CommentForm;
