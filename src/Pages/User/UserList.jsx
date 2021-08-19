import React, { useEffect, useState } from 'react'
import UserService from "../../Services/UserService";
import { Table } from 'semantic-ui-react'

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        let userService = new UserService()
        userService.getUsers()
        .then(result => setUsers(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        <Table.HeaderCell>National Id</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        users.map(users => (
                            <Table.Row key={users.id}>
                                <Table.Cell>{users.email}</Table.Cell>
                                <Table.Cell>{users.password}</Table.Cell>
                                <Table.Cell>{users.createdDate}</Table.Cell>
                                <Table.Cell>{users.nationalId}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

            </Table>
        </div>
    )
}
