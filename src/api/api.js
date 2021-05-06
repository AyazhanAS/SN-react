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
    }
}

export const getUnFollow = (id)=>{
  
    return  instance.post(`follow/${id}`, {})
}

export const getFollow = (id)=>{
    return  instance.delete(`follow/${id}`, {},{})  
}
