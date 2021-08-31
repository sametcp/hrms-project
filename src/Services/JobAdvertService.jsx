import axios from "axios";

export default class JobAdvertService{

    addJobadvertisement(values)
    {
        return axios.post("http://localhost:8080/api/jobadvert/add",values)
    }

    getByConfirmFalse(){
        return axios.get("http://localhost:8080/api/jobadvert/getByIsConfirm?isConfirm=false")
    }
    
    getByConfirmTrue()
    {
        return axios.get("http://localhost:8080/api/jobadvert/getByIsConfirm?isConfirm=true")
    }

    confirmJobAdvert(id)
    {
        return axios.put("http://localhost:8080/api/jobadvert/updateIsConfirm?id="+id+"&isConfirm=true")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadvert/findById?id="+id)
    }
    
}