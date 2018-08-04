import React from 'react';
import { connect } from 'react-redux';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
	<li> 
		<button onClick={() => thumbDownComment(id)}>Thumb down</button>
		{text} 
		<span>votes: {votes}</span>
		<button onClick={() => thumbUpComment(id)}>Thumb up</button>
	</li>;

export default Comment;