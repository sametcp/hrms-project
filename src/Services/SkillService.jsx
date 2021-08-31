import axios from 'axios'

export default class SkillService {
    getSkills() 
    {
        return axios.get("http://localhost:8080/api/programmingskills/getall")
    }

    add(values) 
    {
        return axios.post("http://localhost:8080/api/programmingskills/add", values);
    }

    update(values) 
    {
        return axios.put("http://localhost:8080/api/programmingskills/update", values);
    }

    delete(id) 
    {
        return axios.delete("http://localhost:8080/api/programmingskills/delete?id=" + id);
    }

    getByJobSeekerId(id)
    {
        return axios.get("http://localhost:8080/api/programmingskills/getAllByJobseekerId?id="+id)
    }
}