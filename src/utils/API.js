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
        return axios.get(`${URL}/api/usrs/${username}/${numberUsers}`);
    },
    uploadPost: (formData)=>{
        return axios.post(`${URL}/post/upload`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    },
    userExist:(username) => {
        return axios.get(`${URL}/api/auth/${username}`);
    },
    signup:(user) => {
        return axios.post(`${URL}/api/auth/signup`, user);
    },
    // login:(user)=>{
    //     return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    // },
    // isAuthenticated:()=>{
    //     return axios.get(`${URL}/api/auth/loggedinuser`,{withCredentials:true});
    // }
}

export default API