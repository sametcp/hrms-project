import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Grid, Header, Segment, Button, Message } from 'semantic-ui-react'

export default function RegisterEmployer() {
    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h2" inverted color="green" textAlign="center">
                        <Header.Content>İŞVEREN YENİ ÜYELİK</Header.Content>
                    </Header>
                    <Form>
                        <Segment textAlign="left" color="blue" stacked>
                            <Form.Input
                                fluid
                                icon="warehouse"
                                iconPosition="left"
                                label="Şirket Adı"
                                placeholder="Şirket adı"
                            />
                            <Form.Input
                                fluid
                                icon="world"
                                iconPosition="left"
                                label="Web Sitesi"
                                placeholder="Web Sitesi"
                            />
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                label="E-mail Adresi"
                                placeholder="E-mail adresi"
                            />
                            <Form.Input fluid
                                icon="phone"
                                iconPosition="left"
                                label="Telefon Numarası"
                                placeholder="Telefon numarası">
                            </Form.Input>
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                label="Şifre Oluştur"
                                placeholder="Şifre"
                                type="password"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                label="Şifre Tekrar"
                                placeholder="Şifre tekrar"
                                type="password"
                            />
                            <Button color="green" as={NavLink} to="/">KAYIT OL</Button>
                        </Segment>

                        <Message color = "yellow"><b>İşveren kayıtları sistem çalışanları tarafından onaylandıktan sonra aktif hale gelmektedir!</b></Message>

                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
