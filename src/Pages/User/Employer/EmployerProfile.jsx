import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Segment, Table, Button, Message, Icon } from 'semantic-ui-react'
import EmployerService from '../../../Services/EmployerService'

export default function EmployerProfile(props) {

    const [employer, setEmployer] = useState({})

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployerById(48).then(result => setEmployer(result.data.data))
    }, [])

    const [isShow, setIsShow] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    function handleShow() {
        setIsShow(true)
    }

    const isUpdateConfirmed = () => {
        setConfirmed(true)
    }

    return (
        <div>
            <Segment color="red" raised ><b>PROFİL BİLGİLERİM</b></Segment><br />

            <Table color="green" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">KİŞİSEL BİLGİLER</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell><Icon name="mail"/><b>E-mail</b></Table.Cell>
                        <Table.Cell width={8}><b>{employer.email}</b></Table.Cell>

                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="user secret"/><b>Şifre</b></Table.Cell>
                        {isShow ? <Table.Cell>{employer.password}</Table.Cell> : <Table.Cell><Button active size="mini" color = "grey" onClick={handleShow}>GÖSTER</Button></Table.Cell>}
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={8}><Icon name="newspaper outline"/><b>Şirket Adı</b></Table.Cell>
                        <Table.Cell width={8}><b>{employer.companyName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="newspaper outline"/><b>Website</b></Table.Cell>
                        <Table.Cell width={8}><b>{employer.website}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="phone"/><b>Telefon Numarası</b></Table.Cell>
                        <Table.Cell width={8}><b>{employer.phoneNumber}</b></Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table><br />

            <Button color="instagram" fluid as={NavLink} to="/employer/48/personalinfo/update">Bilgilerini Güncelle</Button><br/><br/>

            {confirmed ? <Message color = "yellow">Bilgileriniz yönetici tarafından onaylandığında güncellenecektir.</Message> : null}

        </div>
    )
}
