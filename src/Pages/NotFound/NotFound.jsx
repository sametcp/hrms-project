import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

export default function NotFound() {

    return (
        <div>
            
            <br/><br/><br/><br/>
            <h1 className="h1"> Böyle bir sayfamız yok. <br/>Anasayfamıza dönmek için<br/><Link to = "/" >Tıkla!</Link></h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    )
}
