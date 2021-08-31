import React, { Component, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useSelector } from 'react-redux'

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
          <Menu widths = "6" size='large'>
                <Container>
                    <Menu.Item as = {NavLink} to ="/" color = "blue"><b>Ana Sayfa</b></Menu.Item>
                    <Menu.Item as = {NavLink} to ="/jobadverts"><b>İş İlanları</b></Menu.Item>
                    
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignIn signOut = {handleSignOut} bisey = "1"/> : <SignOut signIn = {handleSignIn}/>}      
                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}
