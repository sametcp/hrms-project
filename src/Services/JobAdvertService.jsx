import axios from "axios";

export default class JobAdvertService{
    getJobAdverts()
    {
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }
    getOpenJobAdverts()
    {
        return axios.get("http://localhost:8080/api/jobadverts/getAllOpenJobAdvertList")
    }
    getJobAdvertsOrderByPublishedAt()
    {
        return axios.get("http://localhost:8080/api/jobadvert/findAllByOrderByPublishedAt")
    }
    addJobadvertisement()
    {
        return axios.post("http://localhost:8080/api/jobadvert/add")
    }
}