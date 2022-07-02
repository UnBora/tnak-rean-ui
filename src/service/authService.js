import { api } from "../utils/api";

export const signUp=async (user)=>{
    try {
        let response = await api.post('/register',user)
        console.log(response);
        return response.data.message
    } catch (error) {
        console.log(error);
    }
}

export const login= async (user) => {
 try {
     let response =await api.post('/login',user)
     console.log(response);
     return response.data.payload.token
 } catch (error) {
     console.log(error);
 }
}

export const postArticle = async (article,headers) =>{
    try {
        let response =await api.post('/articles',article,headers)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}