import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Table, Icon, Button, Segment } from 'semantic-ui-react'
import JobAdvertService from '../../Services/JobAdvertService'
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/actions/favoriteAdvertActions';
import FavoriteAdvertisementsService from '../../Services/FavoriteAdvertisementsService'

export default function JobAdvertDetail() {

    let { id } = useParams()
    const favoriteAdvertisementsService = new FavoriteAdvertisementsService()
    
    const [jobAdvert, setJobAdvert] = useState({})

    useEffect(() => {
        const jobAdvertService = new JobAdvertService()
        jobAdvertService.getById(id).then(result => setJobAdvert(result.data.data))
    }, [])

    const toApply = () => {
        toast.success("Bilgileriniz işveren ile paylaşıldı.", { theme: "colored" })
    }


    useEffect(() => {
        favoriteAdvertisementsService.getByJobSeekerId(49).then(result => setFavoriteAdvert(result.data.data))
    }, [])
    const [favoriteAdvert, setFavoriteAdvert] = useState([]);

    const dispatch = useDispatch()

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

    //console.log(jobAdvert.jobPositions.jobTitle)
    return (
        <div className="card">
            <Segment color="black" raised ><b>İLAN DETAYI</b></Segment>

            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2"><Icon name="info circle" size="large"></Icon> ŞİRKET BİLGİLERİ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>

                    <Table.Row>
                        <Table.Cell><Icon name="warehouse" color ="grey"/>Şirket</Table.Cell>
                        <Table.Cell><b>{jobAdvert.employer?.companyName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="world" color = "blue"/>Web Sitesi</Table.Cell>
                        <Table.Cell> <a rel="noreferrer"  target="_blank" href={"https://" + jobAdvert.employer?.website}>
                            {jobAdvert.employer?.website}</a>
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon color="green" name="phone" />Telefon Numarası</Table.Cell>
                        <Table.Cell><b>{jobAdvert.employer?.phoneNumber}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="map marker alternate" color = "yellow" />Şehir</Table.Cell>
                        <Table.Cell>{jobAdvert.city?.name}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


            <br />
            <Table color="green" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2"><Icon name="users" />İŞ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>



                <Table.Body>
                    <Table.Row>
                        <Table.Cell>İş Pozisyonu</Table.Cell>
                        <Table.Cell>{jobAdvert.jobPositions?.jobTitle}</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell>Açık Pozisyon Sayısı</Table.Cell>
                        <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell>Çalışma Zamanı</Table.Cell>
                        <Table.Cell>{jobAdvert.workType?.workType}</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell>Çalışma Türü</Table.Cell>
                        <Table.Cell>{jobAdvert.workHour?.workHour}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


            <br />
            <Table color="orange" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="4"><Icon name="money" size="large" /> MAAŞ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Minimum Maaş Skalası</Table.Cell>
                        <Table.Cell width={8}>{jobAdvert.salaryMin} TL</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
                        <Table.Cell width={8} >{jobAdvert.salaryMax} TL</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


            <br />
            <Table color="purple">
                <Table.Header colSpan="4">
                    <Table.Row>
                        <Table.HeaderCell><Icon name="paperclip" />AÇIKLAMA</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell textAlign = "center">{jobAdvert.statement}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


            <br />
            <Table color="black">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell><Icon name="time" />Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell negative><center>{jobAdvert.deadline}</center></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <br/>
            <Button color="green" onClick = {() => toApply()}>BAŞVUR</Button><br/>
            <Button as = {NavLink} to = "/jobadverts" color="instagram">Diğer iş ilanlarına göz at</Button><br/>
            <Button color = "red" onClick = {() => favoriteAdvertFunction(jobAdvert)}>Favorilerime Ekle</Button>
        </div>
    )
}