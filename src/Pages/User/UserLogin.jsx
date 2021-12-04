import React from 'react'
import { NavLink} from "react-router-dom";
import { Grid, Header, Segment, Form, Message, Button,  } from "semantic-ui-react";

export default function UserLogin() {

    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h2" inverted color="blue" textAlign="center">
                        <Header.Content>KULLANICI GİRİŞİ</Header.Content>
                    </Header>

                    <Form>
                        <Segment textAlign="left" color="black" stacked>
                        
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
                            <Button color='blue' as={NavLink} to="/">GİRİŞ YAP</Button>
                            
                            <Message positive>
                                Hesabınız yok mu ?{" "}
                                <Button color='green' size = "small" as={NavLink} to="/registerjobseeker">
                                    KAYIT OL
                                </Button>
                            </Message>

                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
