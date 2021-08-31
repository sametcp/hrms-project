import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function SidebarEmployer() {


    return (

        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item><Icon name='announcement' />İş İlanlarım</Menu.Item>
                <Menu.Item  as = {Link} to='/employer/addjobadvert'><Icon name='add' />İş İlanı Ekle</Menu.Item>
                <Menu.Item  as = {Link} to='/employer/unconfirmedjobadverts'><Icon name='clipboard check' />Onay Bekleyen İlanlar</Menu.Item>
            </Menu>
        </div >

    )
}
