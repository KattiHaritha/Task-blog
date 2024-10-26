import React from 'react';
import { Comment } from '../types/index';

interface CommentItemProps {
    comment: Comment;
}


const CommentItem: React.FC<CommentItemProps> = ({comment}) =>(
    <div>
        <h2>{comment.name}({comment.email})</h2>
        <p>{comment.body}</p>
    </div>
);

export default CommentItem;