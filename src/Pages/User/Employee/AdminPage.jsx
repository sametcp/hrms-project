import React, { useEffect, useState } from 'react'
import EmployeeService from '../../../Services/EmployeeService'
import "../../HomePage/HomePage.css"

export default function AdminPage() {

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        const employeeService = new EmployeeService()
        employeeService.getEmployeeById(63).then(result => setEmployee(result.data.data))
    },[])

    return (
        <div><br/><br/>
            <h5>Hoş Geldin <b>{employee.name} {employee.lastName}</b></h5><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
