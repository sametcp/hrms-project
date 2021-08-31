import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Segment, Table } from 'semantic-ui-react'
import JobSeekerService from "../../../Services/JobSeekerService"

export default function JobSeekerProfile() {

    const [jobSeeker, setJobSeeker] = useState({})

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekerById(49)
            .then(result => setJobSeeker(result.data.data))
    }, [])
    //console.log(jobSeeker)

    return (
        <div>
            <Segment color="black" raised ><b>PROFİL BİLGİLERİM</b></Segment><br />

            <Table color="green" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">KİŞİSEL BİLGİLER</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Adı</b></Table.Cell>
                        <Table.Cell width={8}><b>{jobSeeker.firstName}</b></Table.Cell>

                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>Soyadı</b></Table.Cell>
                        <Table.Cell width={8}><b>{jobSeeker.lastName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width = {8}><b>E-mail Adresi </b></Table.Cell>
                        <Table.Cell width = {8}><b>{jobSeeker.email}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>Doğum Tarihi</b></Table.Cell>
                        <Table.Cell width={8}><b>{jobSeeker.dateOfBirth}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>TC Kimlik Numarası</b></Table.Cell>
                        <Table.Cell width={8}><b>{jobSeeker.nationalId}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>Şifre</b></Table.Cell>
                        <Table.Cell width={8}><b>{jobSeeker.password}</b></Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table><br/>

            <Button color = "instagram" fluid as = {NavLink} to = "/jobseeker/personalinfo/update">Bilgilerini Güncelle</Button>

        </div>
    )
}
