import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostComments, fetchPosts } from '../services/api';
import { Post, Comment } from '../types';
import CommentItem from '../components/CommentItem';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      const posts = await fetchPosts();
      const foundPost = posts.find(p => p.id === parseInt(id!));
      setPost(foundPost || null);
    };
    const loadComments = async () => {
      const comments = await fetchPostComments(parseInt(id!));
      setComments(comments);
    };

    loadPost();
    loadComments();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default BlogDetail;