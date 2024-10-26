import React from 'react';
import { Post } from '../types/index';

interface PostItemProps {
    post: Post;
    onClick: (postId: number) => void;
}


const PostItem: React.FC<PostItemProps> = ({post, onClick}) =>(
    <div onClick={() => onClick(post.id)}>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,100)}...</p>
    </div>
);

export default PostItem;