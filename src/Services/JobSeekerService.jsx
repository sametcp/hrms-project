import axios from "axios";

export default class JobSeekerService{
    getAllJobSeekers()
    {
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }

    getJobSeekerById(id)
    {
        return axios.get("http://localhost:8080/api/jobseekers/getJobseekerById?id="+id)
    }
}