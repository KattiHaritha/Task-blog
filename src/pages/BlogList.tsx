import React,{useState, useEffect} from "react";
import { Post } from '../types/index';
import PostItem from "../components/PostItem";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../services/api";

const BlogList: React.FC = () => {
    const[posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const loadPosts = async () =>{
            const posts = await fetchPosts();
            setPosts(posts);
        };
        loadPosts();
    },[]);
    
    return(
       <div>
        {posts.map(post => (
            <PostItem key={post.id} post={post} onClick={() => navigate(`/post/${post.id}`)}/>
        ))}
       </div>
    )
}

export default BlogList;