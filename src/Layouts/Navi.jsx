import React, { Component, useState } from 'react'
import CreateAccount from './CreateAccount'
import Login from './Login'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {

    return (
        <div>
            <Menu size='large'>
                <Menu.Item as = {Link} to='/'>HRMS</Menu.Item>
                <Menu.Item as = {Link} to='/jobadverts'>İŞ İLANLARINA GİTMEK İÇİN TIKLA</Menu.Item>

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
