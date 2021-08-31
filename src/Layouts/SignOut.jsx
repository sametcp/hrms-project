import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut(props) {
    return (
        <div>
            <Button.Group>
                <Button onClick = {props.signIn} as={Link} to={"/userlogin"}>Giriş yap</Button>
                <Button.Or />
                <Button positive as={Link} to={"/registerjobseeker"}>Kaydol</Button>
            </Button.Group>
        </div>
    )
}
