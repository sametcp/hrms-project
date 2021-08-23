import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function SidebarEmployer() {


    return (

        <div>
            <Menu icon='labeled' vertical>

                <Menu.Item as = {Link} to='/employers/addjobadvert' name='jobadverts'><Icon name='announcement' />İş ilanlarım</Menu.Item>

            </Menu>
        </div >

    )
}
