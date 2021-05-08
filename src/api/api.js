import axios from "axios";



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
        return instance.get(`profile/`+ userId)
    }
   
}

export const authAPI = {
    getHeader(){
        return instance.get(`auth/me`)
    }
}

