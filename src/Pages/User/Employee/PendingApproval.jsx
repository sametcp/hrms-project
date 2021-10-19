import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Icon, Message, Table } from 'semantic-ui-react'
import JobAdvertService from '../../../Services/JobAdvertService'

export default function PendingApproval() {

    const [jobAdverts, setJobAdverts] = useState([])
    let jobAdvertService = new JobAdvertService()

    useEffect(() => {
        jobAdvertService.getSortedByCreatedDate()
            .then(result => setJobAdverts(result.data.data))
    }, [])
    //console.log(jobAdverts)

    const confirmTrue = (id, isConfirm) => {
        jobAdvertService.updateIsConfirmTrue(id).then(toast.success("İlan onaylandı.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }

    const confirmFalse = (id, isConfirm) => {
        jobAdvertService.updateIsConfirmFalse(id).then(toast.success("İlan onayı kaldırıldı.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }

    const activeTrue = (id, isActive) => {
        jobAdvertService.updateIsActiveTrue(id).then(toast.success("Yayın isteği onaylandı.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }

    const activeFalse = (id) => {
        jobAdvertService.updateIsActiveFalse(id).then(toast.success("Yayın isteği kaldırıldı.", { theme: "colored" }))
        setTimeout(() => window.location.reload(), 1200);
    }

    return (
        <div>
            <Message warning>
                <Icon name='info' />
                <b>Sadece onaylanmış ve yayın onayı almış ilanlar yayınlanacaktır.</b>
            </Message>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                        <Table.HeaderCell>Onay</Table.HeaderCell>
                        <Table.HeaderCell>Yayın</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>{jobAdvert.id}</Table.Cell>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobPositions.jobTitle}</Table.Cell>
                                <Table.Cell>{jobAdvert.city.name}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        as={Link} to={`/jobadvert/${jobAdvert.id}/details`}
                                        content="İlan Detayları"
                                        color="blue"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    {jobAdvert.confirm ? <Button
                                        content="İlanı Pasifleştir"
                                        icon="delete"
                                        labelPosition="left"
                                        color = "yellow"
                                        onClick={() => confirmFalse(jobAdvert.id, jobAdvert.confirm)}
                                    /> : <Button
                                        content="İlanı Onayla"
                                        icon="check"
                                        labelPosition="right"
                                        color = "green"
                                        onClick={() => confirmTrue(jobAdvert.id, jobAdvert.confirm)}
                                    >

                                    </Button>}
                                </Table.Cell>
                                <Table.Cell>
                                    {jobAdvert.active ?
                                        <Button
                                            icon="delete"
                                            content="Yayın Onayını Çek"
                                            labelPosition="left"
                                            onClick={() => activeFalse(jobAdvert.id, jobAdvert.active)}
                                            color = "red"
                                        /> :
                                        <Button
                                            icon="check"
                                            content="Yayın Onayı"
                                            labelPosition="right"
                                            color = "green"
                                            onClick={() => activeTrue(jobAdvert.id, jobAdvert.active)}
                                        />}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br/>
        </div>
    )
}
