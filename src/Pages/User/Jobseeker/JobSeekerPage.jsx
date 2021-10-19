import React, { useEffect, useState } from 'react'
import JobSeekerService from '../../../Services/JobSeekerService'
import "../../HomePage/HomePage.css"

export default function JobSeekerPage() {

    const [jobSeeker, setJobSeeker] = useState({})

    useEffect(() => {
        const jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekerById(49).then(result => setJobSeeker(result.data.data))
    },[])

    return (
        <div><br/><br/>
            <h5>Hoş Geldiniz <b>{jobSeeker.firstName} {jobSeeker.lastName}</b></h5><br/>
            <h2>Yüzlerce İş İlanı Sizi Bekliyor!</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
