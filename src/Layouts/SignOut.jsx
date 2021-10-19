import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SignOut(props) {
    return (
        <div>
            <Button.Group>
                <Button onClick = {props.signIn} as={Link} to={"/userlogin"} color = "blue" style = {{marginTop : "5pt"}}>Giriş yap</Button>
                <Button.Or style = {{marginTop : "5pt"}}/>
                <Button positive as={Link} to={"/registerjobseeker"} style = {{marginTop : "5pt"}}>Kaydol</Button>
            </Button.Group>
        </div>
    )
}
