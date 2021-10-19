import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import JobAdvertService from '../../../Services/JobAdvertService'
import { toast } from 'react-toastify';

export default function EmployerJobAdvertPostings() {

    let { id } = useParams()
    //console.log(id)

    const jobAdvertService = new JobAdvertService()

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        jobAdvertService.getJobAdvertsByEmployerId(id).then(result => setJobAdverts(result.data.data))
    }, [])

    //console.log(jobAdverts

    const activeTrue = (id, isActive) => {
        jobAdvertService.updateIsActiveTrue(id).then(toast.success("Yayın isteği onaylandı.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }

    const activeFalse = (id) => {
        jobAdvertService.updateIsActiveFalse(id).then(toast.success("İlan Yayından Çekildi.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">POSITION</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">CITY</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">CREATED DATE</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">DEADLINE</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">ADVERT</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">TAKE DOWN</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">APPLICANTS</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell verticalAlign="middle">{jobAdvert?.jobPositions?.jobTitle}</Table.Cell>
                                <Table.Cell verticalAlign="middle">{jobAdvert?.city?.name}</Table.Cell>
                                <Table.Cell verticalAlign="middle">{jobAdvert?.createdDate}</Table.Cell>
                                <Table.Cell verticalAlign="middle">{jobAdvert?.deadline}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        as={Link} to={`/jobadvert/${jobAdvert.id}/details`}
                                        content="İlanına Git"
                                        icon="right arrow"
                                        labelPosition="right"
                                        color="blue"
                                    />
                                </Table.Cell>
                                <Table.Cell>

                                    {jobAdvert.active ?
                                        <Button
                                            content="Yayından Çek"
                                            color="youtube"
                                            icon="close"
                                            labelPosition="right"
                                            onClick={() => activeFalse(jobAdvert.id)}
                                        /> :
                                        <Button
                                            icon="check"
                                            content="İlanı Yayınla"
                                            labelPosition="right"
                                            color="green"
                                            onClick={() => activeTrue(jobAdvert.id, jobAdvert.active)}
                                        />}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button
                                    icon="right arrow"
                                    content="Başvuran Listesi"
                                    labelPosition="right"
                                    color = "grey"
                                    as = {Link} to = {`/employer/${id}/applicants`}
                                    >

                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
