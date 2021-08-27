import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'

export default function RegisterJobseeker() {
    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h2" inverted color="brown" textAlign="center">
                        <Header.Content>İŞ ARAYAN YENİ ÜYELİK</Header.Content>
                    </Header>
                    <Form>
                        <Segment textAlign="left" color="red" stacked>
                            <Form.Input
                                fluid
                                label="Adınız"
                                icon="warehouse"
                                iconPosition="left"
                                placeholder="Ad"
                            />
                            <Form.Input
                                fluid
                                label="Soyadınız"
                                icon="world"
                                iconPosition="left"
                                placeholder="Soyad"
                            />
                            <Form.Input
                                fluid
                                label="Doğum Tarihiniz"
                                labelPosition="left"
                                icon="birthday cake"
                                iconPosition="left"
                                placeholder="Doğum Tarihi"
                                type="date"
                            />
                            <Form.Input
                                fluid
                                label="E-mail Adresiniz"
                                icon="user"
                                iconPosition="left"
                                placeholder="E-mail"
                            />
                            <Form.Input
                                fluid
                                label="TC kimlik Numaranız"
                                labelPosition="left"
                                icon="id card"
                                iconPosition="left"
                                placeholder="TCKN"
                            />
                            <Form.Input
                                fluid
                                label="Şifre Oluştur"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Şifre"
                                type="password"
                            />
                            <Form.Input
                                fluid
                                label="Şifre Tekrarı"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Şifre tekrar"
                                type="password"
                            />
                            <Button color="green">KAYIT OL</Button>
                        </Segment>

                        Zaten üye misin?{" "}
                        <Button color="orange" as={NavLink} to="/loginjobseeker">
                            GİRİŞ YAP
                        </Button>

                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
