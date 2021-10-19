import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Image, Menu } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu widths="5" size='large'>

                <Container >

                    <Image style={{ marginLeft: "20pt" }} src="https://res.cloudinary.com/dwb0gqsun/image/upload/v1634425742/Adsz_zfviiq.png" width="165" height="50" as={NavLink} to="/" style={{ marginRight: "210pt" }}></Image>

                    <Menu.Item as={NavLink} to="/jobadverts"><Button color="youtube" content="İş İlanlarına Git" fluid size = "big"></Button></Menu.Item>



                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignIn signOut={handleSignOut} bisey="1" /> : <SignOut signIn={handleSignIn} />}
                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}
