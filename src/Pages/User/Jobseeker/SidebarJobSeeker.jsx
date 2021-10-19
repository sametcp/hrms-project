import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Segment } from 'semantic-ui-react'
import JobAdvertService from '../../../Services/JobAdvertService'
import { Link } from 'react-router-dom';

export default function SidebarJobSeeker() {

    const jobAdvertService = new JobAdvertService()
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        jobAdvertService.getSortedByCreatedDate().then(result => setJobAdverts(result.data.data))
    }, [])
    //console.log(jobAdverts[0])

    return (
        <div>
            <Segment textAlign="center" padded color="black" raised ><b><h5>Son Eklenen İş İlanları</h5></b></Segment>

            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[0]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[0]?.salaryMin}TL - {jobAdverts[0]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[0]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[0]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[1]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[1]?.salaryMin}TL - {jobAdverts[1]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[1]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[1]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[2]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[2]?.salaryMin}TL - {jobAdverts[2]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[2]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[2]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[3]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[3]?.salaryMin}TL - {jobAdverts[3]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[3]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[3]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[4]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[4]?.salaryMin}TL - {jobAdverts[4]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[4]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[4]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header textAlign = "left"><h4>{jobAdverts[5]?.employer?.companyName}</h4></Card.Header>
                        <Card.Meta textAlign = "left">Maaş Aralığı {jobAdverts[5]?.salaryMin}TL - {jobAdverts[5]?.salaryMax}TL</Card.Meta><br/>
                        <Card.Description textAlign = "left">
                            {jobAdverts[5]?.statement}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button
                            as={Link} to={`/jobadvert/${jobAdverts[5]?.id}/details`}
                            color='green'>
                                Göz At
                            </Button>
                            <Button color='red' style = {{marginLeft : "2pt"}} circular>
                                Yoksay
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>

    )
}
