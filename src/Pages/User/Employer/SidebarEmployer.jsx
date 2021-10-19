import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function SidebarEmployer() {

    //let {id} = useParams()

    return (

        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item as = {Link} to='/employer/48/personalinfo'><Icon name='info' />Profil bilgilerim</Menu.Item>
                <Menu.Item as = {Link} to='/employer/48/employerjobadvertpostings'><Icon name='announcement' />İş İlanlarım</Menu.Item>
                <Menu.Item as = {Link} to='/employer/48/addjobadvert'><Icon name='add' />İş İlanı Ekle</Menu.Item>
            </Menu>
        </div >

    )
}
