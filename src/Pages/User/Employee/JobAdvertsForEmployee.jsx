import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Table, Menu, Icon } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom';
import JobAdvertService from '../../../Services/JobAdvertService'

export default function JobAdvertsForEmployee() {

    const [jobAdverts, setJobAdverts] = useState([])
    let jobAdvertService = new JobAdvertService()

    useEffect(() => {
        jobAdvertService.getByConfirmTrue()
            .then(result => setJobAdverts(result.data.data))
    }, [])

    //console.log(jobAdverts)

    const onSubmit = ((jobAdvertId) => {
        jobAdvertService.cancelJobAdvert(jobAdvertId).then(window.location.reload());
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Statement</Table.HeaderCell>
                        <Table.HeaderCell>Job</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                        <Table.HeaderCell>Favori</Table.HeaderCell>
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
                                <Table.Cell>
                                    <Button
                                        as={Link} to={`/jobadvert/${jobAdvert.id}/details`}
                                        content="İlan Detayları"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <Button
                                        content="İlanı Pasifleştir"
                                        icon="right arrow"
                                        labelPosition="right"
                                        onClick={() => onSubmit(jobAdvert.id)}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>
                            <Menu floated='right' pagination widths="12">
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        </div>
    )
}
