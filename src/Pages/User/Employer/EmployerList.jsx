import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from "../../../Services/EmployerService";

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        const employerService = new EmployerService()
        employerService.getEmployers()
        .then(result => setEmployers(result.data.data))
    }, [])

    //console.log(employers)

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign = "center">Employer Id</Table.HeaderCell>
                        <Table.HeaderCell textAlign = "center">Company Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign = "center">Website URL</Table.HeaderCell>
                        <Table.HeaderCell textAlign = "center">E-mail Address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key = {employer.id}>
                                <Table.Cell>{employer.id}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

            </Table><br/>
        </div>
    )

}