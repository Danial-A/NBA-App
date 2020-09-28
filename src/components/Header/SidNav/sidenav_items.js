import React from 'react';
import {Link} from 'react-router-dom'
import style from './sidenav.module.css'
import FontAwesome from 'react-fontawesome'

const SideNavItems = () => {

    const items = [
        {
            type:style.option,
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type:style.option,
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            type:style.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            type:style.option,
            icon:'sign-in',
            text:'Sign In',
            link:'/signin'
        },
        {
            type:style.option,
            icon:'sign-out',
            text:'Sign Out',
            link:'/signout'
        }
        
    ]


    const ShowItems = () =>{
        return items.map( (item,i) =>{
            return (
                <div key = {i} className = {item.type}>
                <Link to={item.link}>
                    <FontAwesome name ={item.icon}/>{item.text}
                </Link>
            </div>
            
            )
        })
    }

    
    return (
        <div>
            {ShowItems()}
        </div>
    );
};

export default SideNavItems;