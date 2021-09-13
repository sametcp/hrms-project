import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  Table, Button, Pagination, Select, Label } from 'semantic-ui-react';
import JobAdvertService from '../../Services/JobAdvertService';
import CityService from '../../Services/CityService'
import FavoriteAdversitementsService from '../../Services/FavoriteAdvertisementsService'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/actions/favoriteAdvertActions';
import HRMSFilter from "./HRMSFilter"

export default function JobAdvertList() {

    let jobAdvertService = new JobAdvertService();
    let favoriteAdvertisementsService = new FavoriteAdversitementsService()
    let cityService = new CityService()

    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [jobAdverts, setJobAdverts] = useState([]);
    console.log(jobAdverts)

    const [favoriteAdvert, setFavoriteAdvert] = useState([]);

    const [filterOption, setFilterOption] = useState({});


    const handleChangePageNo = (event, { activePage }) => {
        setPageNo(activePage);
    };

    const handleChangePageSize = (event, { value }) => {
        setPageSize(value);
    };

    const pageSizeOptions = [
        { key: 10, value: 10, text: "10 İlan" },
        { key: 20, value: 20, text: "20 İlan" },
        { key: 50, value: 50, text: "50 İlan" },
        { key: 100, value: 100, text: "100 İlan" },
    ];

    useEffect(() => {
        jobAdvertService.getByFilter(pageNo, pageSize, filterOption)
            .then(result => {
                setJobAdverts(result.data.data);
                setTotalPages(parseInt(result.data.massage));
            })

    }, [filterOption, pageNo, pageSize])
    //console.log(jobAdverts)
    //console.log(totalPages)

    const handleFilterClick = (filterOption) => {
        if (filterOption.cityId.length === 0) {
            filterOption.cityId = null;
        }
        if (filterOption.jobPositionId.length === 0) {
            filterOption.jobPositionId = null;
        }
        if (filterOption.workTypeId.length === 0) {
            filterOption.workTypeId = null;
        }
        if (filterOption.workHourId.length === 0) {
            filterOption.workHourId = null;
        }
        setFilterOption(filterOption);
        setPageNo(1);
        console.log(filterOption)
    }


    const dispatch = useDispatch()

    useEffect(() => {
        favoriteAdvertisementsService.getByJobSeekerId(49).then(result => setFavoriteAdvert(result.data.data))
        jobAdvertService.getJobAdvertsIsConfirmAndIsActiveWithPage(true, true, pageNo, pageSize)
            .then(result => setJobAdverts(result.data.data))
    }, [])
    //console.log(favoriteAdvert[0]?.jobAdvert?.id)



    const favoriteAdvertFunction = (jobAdvert) => {
        let x = favoriteAdvert.find(y => y.jobAdvert.id == jobAdvert.id)
        console.log(x?.jobAdvert?.id)
        console.log(jobAdvert.id)
        if (x?.jobAdvert?.id === jobAdvert.id) {
            toast.error("Bu ilan zaten favorilerinde mevcut", { theme: "colored" })
        }
        else {
            dispatch(addToFavorites(jobAdvert))
            toast.success("İlan favorilere eklendi!", { theme: "colored" })
            setTimeout(() => window.location.reload(), 1000);
        }
    }


    return (
        <div>

            <HRMSFilter clickEvent={handleFilterClick} />

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
                                        onClick={() => favoriteAdvertFunction(jobAdvert)}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

            
                <Label size = "large" style = {{padding : "12px"}}>Bir Sayfadaki İlan Sayısını Belirle</Label>{' '}
                <Select
                    search
                    onChange={handleChangePageSize}
                    placeholder="Seçiniz"
                    options={pageSizeOptions}
                /><br/>


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
