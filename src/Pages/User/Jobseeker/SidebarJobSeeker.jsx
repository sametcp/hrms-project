import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function SidebarJobSeeker() {


    return (

        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item as = {Link} to='/jobadverts'><Icon name='announcement'/>İş İlanları</Menu.Item>
                <Menu.Item as = {Link} to='/employerlist'><Icon name='users' /> İşverenler</Menu.Item>
                {/* <Menu.Item  as = {Link} to='/employer/unconfirmedjobadverts'><Icon name='clipboard check' />CV'ler</Menu.Item> */}
            </Menu>
        </div >

    )
}
