import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Image } from 'semantic-ui-react'

export default function SignIn({signOut}) {
    return (
        <div>
              <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Silver_Classic_Tabby_British_Shorthair_Kitten.jpg/2363px-Silver_Classic_Tabby_British_Shorthair_Kitten.jpg"/>
               
               <Dropdown pointing="top right" text="Samet" style = {{marginTop: "7pt", marginRight : "7pt"}}>
                   <Dropdown.Menu>
                       <Dropdown.Item text="Bilgilerim" icon = "info" as = {NavLink} to = "/jobseeker/49/personalinfo"/>
                       <Dropdown.Item text="Favorilerim" icon = "favorite" as = {NavLink} to = "/jobseeker/49/favoriteads"/>
                       <Dropdown.Item text="Ayarlar" icon = "settings" as = {NavLink} to = "/jobseeker/49/settings"/>
                       <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon = "sign-out" />
                   </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}
