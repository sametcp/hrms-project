import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './notfound.css'

export default function NotFound() {

    return (
        <div><br/><br/><br/><br/><br/>
            <h1 style = {{marginRight : "7.65em"}}>Böyle Bir Sayfamız Yok.</h1>
            <h3 style = {{marginRight : "10em"}}>Ulaşmaya çalıştığınız sayfa bulunamadı. Lütfen ulaşmak istediğiniz sayfanın adresini kontrol edin.</h3><br/>
            <Button as = {NavLink} to = "/" color="purple" size = "large" style = {{marginRight : "17.5em"}}>Anasayfaya Git</Button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
