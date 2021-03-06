import React, { useState } from 'react'
import { NavLink, useHistory, Link } from "react-router-dom";
import { Grid, Header, Segment, Form, Message, Button,  } from "semantic-ui-react";

export default function LogInJobseeker() {

    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h2" inverted color="brown" textAlign="center">
                        <Header.Content>İŞ ARAYAN GİRİŞİ</Header.Content>
                    </Header>

                    <Form>
                        <Segment textAlign="left" color="green" stacked>
                        
                            <Form.Input
                                label="E-mail"
                                placeholder="E-posta adresi"
                                icon="user"
                                iconPosition="left"
                                fluid
                            />
                            <br/>
                            <Form.Input
                                label="Şifre"
                                placeholder="Şifre"
                                icon="lock"
                                iconPosition="left"
                                type="password"
                                fluid
                            />
                            <br/>
                            <Button color='green' as={NavLink} to="/jobseekers">GİRİŞ YAP</Button>
                            
                            <Message positive>
                                Hesabınız yok mu ?{" "}
                                <Button inverted color='google plus' size = "small" as={NavLink} to="/registerjobseeker">
                                    KAYIT OL
                                </Button>
                            </Message>

                            <Message info><Link to={"/loginemployer"}><b>İşveren olarak giriş yapmak için tıkla</b></Link></Message>

                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
