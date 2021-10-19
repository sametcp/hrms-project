import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Table } from 'semantic-ui-react'
import FavoriteAdvertisementsService from '../../Services/FavoriteAdvertisementsService'
import { removeFromFavorites } from '../../store/actions/favoriteAdvertActions'

export default function FavoriteAdvertisements() {

    const [favoriteAdverts, setFavoriteAdverts] = useState([])
    let favoriteAdvertisementsService = new FavoriteAdvertisementsService()

    useEffect(() => {
        let favoriteAdvertisementsService = new FavoriteAdvertisementsService()
        favoriteAdvertisementsService.getByJobSeekerId(49).then(result => setFavoriteAdverts(result.data.data))
    }, [])

    //console.log(favoriteAdverts)


    const dispatch = useDispatch()
    const handleDeleteFavoriteAdvert = (favoriteAdvert) => {
        dispatch(removeFromFavorites(favoriteAdvert))
        favoriteAdvertisementsService.delete(favoriteAdvert.id)
        toast.success("İlan favorilerden kaldırıldı!", { theme: "colored" })
        setTimeout(() => window.location.reload(), 1000);
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
                                <Table.Cell><Button negative onClick={() => handleDeleteFavoriteAdvert(favoriteAdvert)}>Favorilerden Çıkart</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}