import React, { useEffect, useState } from 'react'
import EmployeeService from '../../../Services/EmployeeService'
import { NavLink } from 'react-router-dom'
import { Segment, Table, Button } from 'semantic-ui-react'

export default function EmployeeProfile() {

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        let employeeService = new EmployeeService()
        employeeService.getEmployeeById(63).then(result => setEmployee(result.data.data))
    }, [])
    //console.log(employee)

    const [isShow, setIsShow] = useState(false)

    function handleShow() {
        setIsShow(true)
    }

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
                        <Table.Cell><b>E-mail</b></Table.Cell>
                        <Table.Cell width={8}><b>{employee.email}</b></Table.Cell>

                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>Şifre</b></Table.Cell>
                        {isShow ? <Table.Cell>{employee.password}</Table.Cell> : <Table.Cell><Button active size="mini" onClick={handleShow}>GÖSTER</Button></Table.Cell>}
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell width={8}><b>İsim</b></Table.Cell>
                        <Table.Cell width={8}><b>{employee.name}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><b>Soyad</b></Table.Cell>
                        <Table.Cell width={8}><b>{employee.lastName}</b></Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table><br />

            <Button color="instagram" fluid as={NavLink} to="/admin/63/update">Bilgilerini Güncelle</Button>
        </div>
    )
}
