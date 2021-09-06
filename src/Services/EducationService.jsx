import axios from "axios";

export default class EducationService{
    add(values)
    {
        return axios.post("http://localhost:8080/api/schools/add",values)
    }

    update(values)
    {
        return axios.put("http://localhost:8080/api/schools/update",values)
    }

    delete(id)
    {
        return axios.delete("http://localhost:8080/api/schools/delete?id="+id)
    }

    getByJobSeekerId(id)
    {
        return axios.get("http://localhost:8080/api/schools/getByJobseekerId?id="+id)
    }

    getById(id)
    {
        return axios.get("http://localhost:8080/api/schools/getById?id="+id)
    }
}