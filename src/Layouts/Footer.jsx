import React from 'react'
import { Badge, Container } from 'reactstrap'
import { Grid, Icon, Menu, Segment } from 'semantic-ui-react'
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <Segment stacked inverted vertical>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Badge href="#"><h6>Hakkımızda</h6></Badge>{" "}
                                <Badge href="#"><h6>Sorularınız</h6></Badge>{" "}
                                <Badge href="#"><h6>Kariyer</h6></Badge>{" "}
                                <Badge href="#"><h6>Önerileriniz</h6></Badge><br />
                                Tüm hakları saklıdır<br />
                                Copyright © {new Date().getFullYear()} HRMS by{" "}
                                <a href="#">Samet Berk Şimşek</a>
                            </Grid.Column>
                            <Grid.Column width={5} >
                                Bu platformlardan bana ulaşabilirsiniz.
                                <Menu>
                                    <Menu.Item href="https://www.instagram.com/samettcp/"
                                        target="_blank"
                                        position="left">
                                        <Icon name="instagram" size="big" />
                                    </Menu.Item>
                                    <Menu.Item href="https://github.com/sametcp"
                                        target="_blank">
                                        <Icon name="github" size="big" />
                                    </Menu.Item>
                                    <Menu.Item href="https://www.linkedin.com/in/samet-berk-%C5%9Fim%C5%9Fek-2295b6210/"
                                        target="_blank">
                                        <Icon name="linkedin" size="big" />
                                    </Menu.Item>
                                    <Menu.Item href="https://www.youtube.com/channel/UC55iTzobEbXBhSfaDB3UQZA"
                                        target="_blank"
                                        position="right">
                                        <Icon name="youtube" size="big" />
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                E-posta Adresimiz
                                <Menu>
                                    <Menu.Item position="left">
                                        <Icon name="mail" size="big" />
                                        <b>sametberk.simsek@gmail.com</b>
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

            </Segment>
        </div>
    )
}
