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

    getByFilter(pageNo, pageSize, filterOption)
    {
        return axios.post("http://localhost:8080/api/jobadvert/getByFilter?pageNo="+pageNo+"&pageSize="+pageSize,filterOption)
    }

    getAllAdverts()
    {
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }

    getSortedByCreatedDate()
    {
        return axios.get("http://localhost:8080/api/jobadvert/getSortedByCreatedDate")
    }

    updateIsActiveTrue(id)
    {
        return axios.put("http://localhost:8080/api/jobadvert/updateIsActive?id="+id+"&isActive=true")
    }

    updateIsActiveFalse(id)
    {
        return axios.put("http://localhost:8080/api/jobadvert/updateIsActive?id="+id+"&isActive=false")
    }

    updateIsConfirmTrue(id)
    {
        return axios.put("http://localhost:8080/api/jobadvert/updateIsConfirm?id="+id+"&isConfirm=true")
    }

    updateIsConfirmFalse(id)
    {
        return axios.put("http://localhost:8080/api/jobadvert/updateIsConfirm?id="+id+"&isConfirm=false")
    }

    getJobAdvertsByEmployerId(id)
    {
        return axios.get("http://localhost:8080/api/jobadvert/getByEmployerId?id="+id)
    }
    
}