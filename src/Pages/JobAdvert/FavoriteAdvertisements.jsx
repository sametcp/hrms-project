import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Table } from 'semantic-ui-react'
import FavoriteAdvertisementsService from '../../Services/FavoriteAdvertisementsService'

export default function FavoriteAdvertisements() {

    const [favoriteAdverts, setFavoriteAdverts] = useState([])
    let favoriteAdvertisementsService = new FavoriteAdvertisementsService()

    useEffect(() => {
        let favoriteAdvertisementsService = new FavoriteAdvertisementsService()
        favoriteAdvertisementsService.getByJobSeekerId(49).then(result => setFavoriteAdverts(result.data.data))
    }, [])

    //console.log(favoriteAdverts)

    const handleDeleteFavoriteAdvert = (id) => {
        favoriteAdvertisementsService.delete(id).then(window.location.reload())
    }

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
                        <Table.HeaderCell>Favori</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        favoriteAdverts.map(favoriteAdvert => (
                            <Table.Row key={favoriteAdvert.id}>
                                <Table.Cell>{favoriteAdvert.jobAdvert.employer?.companyName}</Table.Cell>
                                <Table.Cell>{favoriteAdvert.jobAdvert.statement}</Table.Cell>
                                <Table.Cell>{favoriteAdvert.jobAdvert.jobPositions?.jobTitle}</Table.Cell>
                                <Table.Cell>{favoriteAdvert.jobAdvert.city?.name}</Table.Cell>
                                <Table.Cell>{favoriteAdvert.jobAdvert.employer?.email}</Table.Cell>
                                <Table.Cell><Button negative onClick = {() => handleDeleteFavoriteAdvert(favoriteAdvert.id)}>Favorilerden Çıkart</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
