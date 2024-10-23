import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://localhost:7228/api",
});


export default class UserService{
    static async listarTodos(){
        return axiosInstance.get("/User/all");
    } 
    static async listarTabela(){
        return axiosInstance.get("/User/table")
    }
    static async listarPorId(id) {
        return axiosInstance.get(`/User/${id}`);
    }  
    static async salvar(user){
        return axiosInstance.post("/User", user);
    }
    static async atualizar(user){
        return axiosInstance.put(`/User/Update/${user.id}`, user);
    }
    static async deletar(id){
        return axiosInstance.delete(`/User/Delete/${id}`);
    }
}