import axios from "axios";
import { login } from "../redux/auth-reducer";



const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "10785454-965d-41cc-9009-2fd1faf2ce84"
    },
    baseURL:`https://social-network.samuraijs.com/api/1.0/`
});

export const userAPI = {
    getUsers(pageNumber, pageSize){
        return  instance.get(`users?page=${pageNumber}&count=${pageSize}`,{})
        .then(response => response.data)
    },
    getUnFollow (id){
  
        return  instance.delete(`follow/${id}`,)
    },
    getFollow (id){
        return  instance.post(`follow/${id}`,)  
    },
    getProfile(userId){
        console.log("old method");
        return profileAPI.getProfile(userId)
    }
   
}


export const profileAPI = {
    
    getProfile(userId){
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status:status})
    }
   
}

export const authAPI = {
    getHeader(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

