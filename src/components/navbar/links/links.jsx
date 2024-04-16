"use client"

import { useState } from "react";
import style from "./links.module.css"
import NavLink from "./navLink/navLink";

const links = [
    {
        title: 'HomePage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    },

];
const LinksComponent = ()=>{
    const [open, setOpen] = useState(false);

    

    //Temporary
    const isAdmin = false;
    const session = true;
    return (
        <div className={style.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}{
                session ? (
                    <>
                    {isAdmin && (
                        <NavLink item={{title: 'Admin', path: '/admin'}}/>
                    )}
                    <button className={style.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: 'Login', path: '/login'}}/>
                )
            }
        </div>
        )
    }
export default LinksComponent