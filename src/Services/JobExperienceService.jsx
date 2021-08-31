import axios from 'axios'

export default class JobExperienceService{
    getExperinces()
    {
        return axios.get("http://localhost:8080/api/experiences/getall");
    }

    getByJobSeekerId(id)
    {
        return axios.get("http://localhost:8080/api/experiences/getAllByJobseekerId?id="+id)
    }
}