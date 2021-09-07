import axios from "axios";

export default class JobAdvertService{

    addJobadvertisement(values)
    {
        return axios.post("http://localhost:8080/api/jobadvert/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadvert/findById?id="+id)
    }
    
    getJobAdvertsIsConfirmAndIsActiveWithPage(isActive, isConfirm, pageNo, pageSize)
    {
        return axios.get("http://localhost:8080/api/jobadvert/getByIsConfirmedAndIsActiveWithPage?isActive="+isActive+"&isConfirm="+isConfirm+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }
    
}