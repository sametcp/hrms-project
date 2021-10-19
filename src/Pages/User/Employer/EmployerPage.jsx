import React, { useEffect, useState } from 'react'
import EmployerService from '../../../Services/EmployerService'

export default function EmployerPage() {

    const [employer, setEmployer] = useState({})

    useEffect(() => {
        const employerService = new EmployerService()
        employerService.getEmployerById(48).then(result => setEmployer(result.data.data))
    },[])

    return (
        <div><br/><br/>
            <h5>Hoş Geldiniz</h5><b></b><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>      
        </div>
    )
}
