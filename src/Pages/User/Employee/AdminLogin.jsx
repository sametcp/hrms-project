import React from 'react'
import { NavLink } from "react-router-dom";
import { Grid, Header, Segment, Form, Button } from "semantic-ui-react";

export default function Admin() {
    return (
        <div>
             <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h2" inverted color="brown" textAlign="center">
                        <Header.Content>ADMİN GİRİŞİ</Header.Content>
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
                            <Button color='green' as={NavLink} to="/admin/63/panel">GİRİŞ YAP</Button>

                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
