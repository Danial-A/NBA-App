import { logDOM } from '@testing-library/react';
import React from 'react';
import style from './header.module.css'

import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNavigation from './SidNav/sidenav'

const Header = (props) => {


    
    const navBars = () =>(
        <div className = {style.bars}>
            <FontAwesome name = "bars"
                onClick = {props.onOpenNav}
                style = {{
                color:'#dfdfdfdf',
                padding:'10px',
                cursor:'pointer'
            }}/>
        </div>
    )

    const logo = () =>(
        
            <Link to = "/" className = {style.logo}>
                <img alt = "nba Logo" src = "/images/nba_logo.png"/>
            </Link>
   
        )
   

    return (
        <header className = {style.header}>
        <SideNavigation {...props}/>
            <div className = {style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    );
};

export default Header;