import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://localhost:7228/api",
  });

export default class CompanyService{
    static async listarTodos(){
        return axiosInstance.get("/Company/all");
    }
    static async listarTabela(){
        return axiosInstance.get("/Company/table");
    }
    static async listarPorId(id) {
        return axiosInstance.get(`/Company/${id}`);
    }  
    static async salvar(company){
        return axiosInstance.post("/Company", company);
    }
    static async atualizar(company){
        return axiosInstance.put("/Company/$(company.id)", company);
    }
    static async deletar(id){
        return axiosInstance.delete(`/Company/${id}`);
    }
    static async listarStatus(status){
        return axiosInstance.get(
            `/Company/status=${status}`
        )
        /* try{
            const response = await axiosInstance.get(
                `/company/status?status=${status}`
            )
        } catch (error){
            ErrorHandler.handle(error);
            throw error;
        }*/
    }
}

