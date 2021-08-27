import axios from "axios";

export default class LanguageService {
    add(values) 
    {
        return axios.post("http://localhost:8080/api/foreignlanguages/add", values);
    }

    update(values) 
    {
        return axios.put("http://localhost:8080/api/foreignlanguages/update", values);
    }

    delete(id) 
    {
        return axios.delete("http://localhost:8080/api/foreignlanguages/delete?id=" + id);
    }
}