import axios from "axios";

export default class FavoriteAdvertisementsService{
    getByJobSeekerId(jobSeekerId)
    {
        return axios.get("http://localhost:8080/api/jobSeekerFavoriteJobAdvertController/getByJobseekerId?jobSeekerId="+jobSeekerId)
    }

    delete(id)
    {
        return axios.delete("http://localhost:8080/api/jobSeekerFavoriteJobAdvertController/delete?id="+id)
    }

    add(values)
    {
        return axios.post("http://localhost:8080/api/jobSeekerFavoriteJobAdvertController/add",values)
    }
}