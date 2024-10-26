import axios from "axios";
import {Post, Comment} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
}

export const fetchPostComments = async (postId: number) : Promise<Comment[]> =>{
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
}