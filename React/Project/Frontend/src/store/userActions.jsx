import { useDispatch } from "react-redux";
import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";

export const asyncgetproducts = async ()  => async () => {
    try {
        console.log(getState());
        
        const res =await axios.get("/users");
        console.log(res);
        useDispatch(loaduser(res.data));
        
    } catch (error) {
        console.log(error);
        
    }
    
}