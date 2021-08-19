import React, { Component } from 'react'
import CreateAccount from './CreateAccount'
import Login from './Login'
import { Link, NavLink } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {

    return (
        <div>
            <Menu size='large'>
                <Menu.Item name='HRMS' as = {Link} to='/'/>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary as = {NavLink} to ="/login">GİRİŞ YAP</Button>
                        <Button primary style={{ marginLeft: "0.5em" }}>KAYDOL</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
