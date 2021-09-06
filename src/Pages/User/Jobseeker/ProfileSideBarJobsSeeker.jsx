import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function ProfileSidebarJobSeeker() {


    return (

        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item as = {Link} to='/jobseeker/49/personalinfo'><Icon name='info'/>Kişisel Bilgilerim</Menu.Item>
                <Menu.Item as = {Link} to='/jobseeker/49/cv'><Icon name='info' />CV Bilgilerim</Menu.Item>
            </Menu>
        </div >

    )
}
