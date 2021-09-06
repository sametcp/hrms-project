import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react';
import JobAdvertService from '../../Services/JobAdvertService';
import { ButtonToggle } from 'reactstrap';

export default function ConfirmJobAdvert() {

    let jobAdvertService = new JobAdvertService();

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        jobAdvertService.getByConfirmFalse()
            .then((result) => setJobAdverts(result.data.data))
    }, [])

    const confirm = (id) => {
        jobAdvertService
            .confirmJobAdvert(id)
            .then(window.location.reload());
    };


    return (
        <div>

            <Table celled color={'blue'} key={'blue'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Statement</Table.HeaderCell>
                        <Table.HeaderCell>Job</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Add</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.statement}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobPositions.jobTitle}</Table.Cell>
                                <Table.Cell>{jobAdvert.city.name}</Table.Cell>
                                <Table.Cell>{jobAdvert.employer.email}</Table.Cell>
                                <Table.Cell textAlign="center"><ButtonToggle
                                    onClick={() => confirm(jobAdvert.id)} color="success">CONFİRM</ButtonToggle></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>



            </Table>
        </div>
    )
}
