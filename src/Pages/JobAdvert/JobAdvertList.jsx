import React, { useEffect, useState } from 'react'
import JobAdvertService from "../../Services/JobAdvertService";
import { Button, Table, Menu, Icon } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom';
import FavoriteAdvertisementsService from '../../Services/FavoriteAdvertisementsService';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/actions/favoriteAdvertActions';

export default function JobAdvertList() {

    //const dispatch = useDispatch() 
    //let { id } = useParams()

    const [jobAdverts, setJobAdverts] = useState([])
    let favoriteAdvertisementsService = new FavoriteAdvertisementsService()

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getByConfirmTrue()
            .then(result => setJobAdverts(result.data.data))
    }, [])

    // const initialValues = {
    //     jobAdvertId: "",
    //     jobseekerId: ""
    // }

    const onSubmit = ((jobAdvert) => {
        let values = { jobAdvertId: jobAdvert.id, jobseekerId: 49 }
        console.log(values)
        favoriteAdvertisementsService.add(values).then(toast.success("Eklendi"))
    })

    let active = false

    const handleActive = (confirm) => {
        active = confirm
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
                                        content="Favorilerime Ekle"
                                        icon="right arrow"
                                        labelPosition="right"
                                        onClick={() => onSubmit(jobAdvert)}
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
