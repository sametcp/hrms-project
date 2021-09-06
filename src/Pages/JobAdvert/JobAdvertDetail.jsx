import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Table, Icon, Button, Segment } from 'semantic-ui-react'
import JobAdvertService from '../../Services/JobAdvertService'

export default function JobAdvertDetail() {

    let { id } = useParams()

    const [jobAdvert, setJobAdvert] = useState({})

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getById(id).then(result => setJobAdvert(result.data.data))
    }, [])

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
                        <Table.Cell><Icon name="warehouse" />Şirket</Table.Cell>
                        <Table.Cell><b>{jobAdvert.employer?.companyName}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon color="blue" name="world" />Web Sitesi</Table.Cell>
                        <Table.Cell> <a rel="noreferrer"  target="_blank" href={"https://" + jobAdvert.employer?.website}>
                            {jobAdvert.employer?.website}</a>
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon color="black" name="phone" />Telefon Numarası</Table.Cell>
                        <Table.Cell><b>{jobAdvert.employer?.phoneNumber}</b></Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell><Icon name="map marker alternate" />Şehir</Table.Cell>
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
                        <Table.Cell>{jobAdvert.statement}</Table.Cell>
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
            <Button color="green">BAŞVUR</Button>

        </div>
    )
}