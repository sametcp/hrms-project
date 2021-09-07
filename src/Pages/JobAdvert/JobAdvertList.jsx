import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Message, Icon, Table, Button, Pagination, Select } from 'semantic-ui-react';
import JobAdvertService from '../../Services/JobAdvertService';
import FavoriteAdversitementsService from '../../Services//FavoriteAdvertisementsService'
import { toast } from 'react-toastify';

export default function JobAdvertList() {

    let jobAdvertService = new JobAdvertService();
    let favoriteAdvertisementsService = new FavoriteAdversitementsService()

    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const handleChangePageNo = (event, { activePage }) => {
        setPageNo(activePage);
    };

    const handleChangePageSize = (event, { value }) => {
        setPageSize(value);
    };

    const pageSizeOptions = [
        { key: 1, value: 10, text: "10 İlan" },
        { key: 2, value: 20, text: "20 İlan" },
        { key: 3, value: 50, text: "50 İlan" },
        { key: 4, value: 100, text: "100 İlan" },
    ];

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() => {
        jobAdvertService.getJobAdvertsIsConfirmAndIsActiveWithPage(false, false, pageNo, pageSize)
            .then(result => {
                setJobAdverts(result.data.data);
                setTotalPages(parseInt(result.data.massage));
            })

    }, [pageNo, pageSize])
    //console.log(jobAdverts)
    //console.log(totalPages)


    const onSubmit = ((jobAdvert) => {
        let values = { jobAdvertId: jobAdvert.id, jobseekerId: 49 }
        console.log(values)
        favoriteAdvertisementsService.add(values).then(toast.success("Eklendi"))
    })

    return (
        <div>

            <Message size="large">
                Bir Sayfadaki İlan Sayısı {" "}
                <Select
                    search
                    onChange={handleChangePageSize}
                    placeholder="Seçiniz"
                    options={pageSizeOptions}
                />
            </Message>

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

            </Table>

            <Pagination
                style={{ marginTop: "25pt" }}
                firstItem={null}
                lastItem={null}
                activePage={pageNo}
                onPageChange={handleChangePageNo}
                totalPages={totalPages}
            />

        </div>
    )
}
