import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Segment, Table } from 'semantic-ui-react'
import JobSeekerService from "../../../Services/JobSeekerService"

export default function JobSeekerProfile() {

    //let {id} = useParams()

    const [jobSeeker, setJobSeeker] = useState({})

    useEffect(() => {
        const jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekerById(49)
            .then(result => setJobSeeker(result.data.data))
    }, [])
    //console.log(jobSeeker)

    const [isShow, setIsShow] = useState(false)

    function handleShow() {
        setIsShow(true)
    }

    return (
        <div>
            <Segment color="red" raised ><b>PROFİL BİLGİLERİM</b></Segment><br />

            <Table color="green" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">KİŞİSEL BİLGİLER</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={6}><Icon name="newspaper outline" /><b>Adı</b></Table.Cell>
                        <Table.Cell width={6}><b>{jobSeeker.firstName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={6}><Icon name="newspaper outline" /><b>Soyadı</b></Table.Cell>
                        <Table.Cell width={6}><b>{jobSeeker.lastName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={6}><Icon name="mail" /><b>E-mail Adresi </b></Table.Cell>
                        <Table.Cell width={6}><b>{jobSeeker.email}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={6}><Icon name="birthday cake" /><b>Doğum Tarihi</b></Table.Cell>
                        <Table.Cell width={6}><b>{jobSeeker.dateOfBirth}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={6}><Icon name="indent" /><b>TC Kimlik Numarası</b></Table.Cell>
                        <Table.Cell width={6}><b>{jobSeeker.nationalId}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={6}><Icon name="user secret" /><b>Şifre</b></Table.Cell>
                        {isShow ? <Table.Cell width={6}>{jobSeeker.password}</Table.Cell> : <Table.Cell><Button active color = "grey" size="mini" onClick={handleShow}>GÖSTER</Button></Table.Cell>}
                    </Table.Row>

                </Table.Body>
            </Table><br/>

            <Button color="instagram" fluid as={NavLink} to="/jobseeker/49/personalinfo/update">Bilgilerini Güncelle</Button><br />

        </div>
    )
}
