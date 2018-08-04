import React from 'react';

import Comment from './CommentContainer';

const CommentList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)} </ul>

export default CommentList;