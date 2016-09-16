import uuid from 'uuid-v4';

import delay from './delay';

const comments = [
  {
    id: '0e176b93-1f6f-4005-b777-3ad69cddf4cc',
    author: 'Pete Hunt',
    message: 'Hey there!',
  },
  {
    id: '6412d313-a2b2-4c72-bee9-34cdbe0f04ef',
    author: 'Paul O’Shannessy',
    message: 'React is *great*!',
  },
];

class CommentAPI {
  static getAllComments() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], comments));
      }, delay);
    });
  }

  static saveComment(comment) {
    const newComment = { ...comment };
    return new Promise((resolve) => {
      setTimeout(() => {
        newComment.id = uuid();
        comments.push(newComment);
        resolve(Object.assign({}, newComment));
      }, delay);
    });
  }
}

export default CommentAPI;
