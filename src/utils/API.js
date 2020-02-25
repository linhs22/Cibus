import axios from "axios";
const URL = "http://localhost:8090"
// const URL = "https://joesreactzoo-api.herokuapp.com"

const API = {
    getPosts: (userid, numberPosts)=>{
        return axios.get(`${URL}/api/posts/${userid}/${numberPosts}`);
    },
    getPostsHomepage: (userid, offset)=>{
        return axios.get(`${URL}/api/followers/${userid}/${offset}`);
    },
    getUsers: (username, numberUsers)=>{
        return axios.get(`${URL}/api/users/${username}/${numberUsers}`);
    },
    uploadPost: (data)=>{
        return axios.post(`${URL}/post/upload`, data); //{headers: {'Content-Type': 'multipart/form-data'}}
    },
    userExist:(username) => {
        return axios.get(`${URL}/api/auth/${username}`);
    },
    signup:(user) => {
        return axios.post(`${URL}/api/auth/signup`, user);
    },
    nutrition: (data) => {
        return axios.post(`${URL}/api/nutrition`, data);
    },
    getSearchPosts: (search, numberPosts) => {
        return axios.get(`${URL}/searchpost/${search}/${numberPosts}`);
    } 
    // login:(user)=>{
    //     return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    // },
    // isAuthenticated:()=>{
    //     return axios.get(`${URL}/api/auth/loggedinuser`,{withCredentials:true});
    // }
}

export default API