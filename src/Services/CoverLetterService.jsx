import axios from "axios";

export default class CoverLetterService{
    add(values)
    {
        return axios.post("http://localhost:8080/api/coverletters/add",values)
    }

    update(values)
    {
        return axios.put("http://localhost:8080/api/coverletters/update",values)
    }

    delete(id)
    {
        return axios.delete("http://localhost:8080/api/coverletters/delete?id="+id)
    }

    getByJobSeekerId(id)
    {
        return axios.get("http://localhost:8080/api/coverletters/getAllByJobSeekerId?id="+id)
    }
}