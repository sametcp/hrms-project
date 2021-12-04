import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { useParams } from 'react-router'

export default function AdminPanel() {

    let {id} = useParams()
    //console.log(id)

    return (
        <div>
             <Menu icon='labeled' vertical>
                <Menu.Item as = {Link} to={`/admin/${id}/profile`}><Icon name='info' />Profil bilgilerim</Menu.Item>
                {/* <Menu.Item as = {Link} to={`/admin/${id}/unconfirmedprofiles`}><Icon name='clipboard check' />Onay Bekleyen<br/>Profil Güncellemeleri</Menu.Item> */}
                <Menu.Item as = {Link} to={`/admin/${id}/pendingapproval`}><Icon name='clipboard check' />Onay Bekleyen<br/>İş İlanları</Menu.Item>
                <Menu.Item as = {Link} to={`/admin/${id}/employerlist`}><Icon name='user' />İşverenler Listesi</Menu.Item>
            </Menu>
        </div>
    )
}
