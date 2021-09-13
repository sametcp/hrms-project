import React, { useEffect, useState } from 'react'
import JobSeekerService from "../../../Services/JobSeekerService";
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getAllJobSeekers()
        .then(result => setJobSeekers(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>National Id</Table.HeaderCell>
                        <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row key={jobSeeker.id}>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.nationalId}</Table.Cell>
                                <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
                                <Table.Cell>{jobSeeker.email}</Table.Cell>
                                <Table.Cell><Button as={Link} to={`/jobseeker/${jobSeeker.id}/details`}
                                        content="Show Details"
                                        icon="right arrow"
                                        labelPosition="right"
                                /></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

            </Table><br/>
        </div>
    )
}
