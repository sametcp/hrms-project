import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function AdminPanel() {
    return (
        <div>
             <Menu icon='labeled' vertical>
                <Menu.Item as = {Link} to='/admin/63/profile'><Icon name='info' />Profil bilgilerim</Menu.Item>
                <Menu.Item as = {Link} to='/admin/63/unconfirmedprofiles'><Icon name='clipboard check' />Onay Bekleyen<br/>Profil Güncellemeleri</Menu.Item>
                <Menu.Item as = {Link} to='/admin/63/unconfirmedjobadverts'><Icon name='clipboard check' />Onay Bekleyen<br/>İş İlanları</Menu.Item>
                <Menu.Item as = {Link} to='/admin/63/jobadverts'><Icon name='announcement'/>İş İlanları</Menu.Item>
            </Menu>
        </div>
    )
}
