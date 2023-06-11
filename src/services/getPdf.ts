import axios from "axios"
import { API_URL } from "./config"
import { IPdfData } from "@/models"

export const getPDF = async (data: IPdfData) => {
    
    try{
        return await axios.post(`${API_URL}/get-pdf/contrato-pdf`, {data:data})
    }catch(err){
        throw new Error(`${err}`)
    }

}