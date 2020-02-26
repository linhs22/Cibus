import axios from "axios";
const URL = "http://localhost:8090"
// const URL = "https://joesreactzoo-api.herokuapp.com"

const API = {
    getPosts: (userid, numberPosts)=>{
        return axios.get(`${URL}/api/posts/${userid}/${numberPosts}`);
    },
    getMyPosts: (userid)=>{
        return axios.get(`${URL}/api/myposts/${userid}`);
    },
    getPostsHomepage: (userid, offset)=>{
        console.log("Getting posts")
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
    },
    getMyFood: (userId) => {
        return axios.get(`${URL}/api/bookmark/all/${userId}`);
    }, 
    followUser: (follower, following) => {
        return axios.post(`${URL}/api/followers/save/${follower}/${following}`)
        // return console.log("yo")
    }

    // login:(user)=>{
    //     return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    // },
    // isAuthenticated:()=>{
    //     return axios.get(`${URL}/api/auth/loggedinuser`,{withCredentials:true});
    // }
}

export default API