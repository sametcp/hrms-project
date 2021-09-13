import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function SidebarJobSeeker() {


    return (
        <div>
            <Menu icon='labeled' widths={4}>
                <Menu.Item as={Link} to='/employerlist'><Icon name='users' /> İşverenler</Menu.Item>
            </Menu>
        </div >

    )
}
