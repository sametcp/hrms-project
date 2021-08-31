import axios from 'axios'

export default class ImageService{
    getImages(){
        return axios.get("http://localhost:8080/api/images/getAll");
    }

    add(id) 
    {
        return axios.post("http://localhost:8080/api/images/add?jobSeekerId="+id);
    }

    update() 
    {
        return axios.put("http://localhost:8080/api/images/update");
    }

    delete(id) 
    {
        return axios.delete("http://localhost:8080/api/images/delete?id="+id);
    }

    getByJobSeekerId(id)
    {
        return axios.get("http://localhost:8080/api/images/getByJobseekerId?id="+id)
    }
}