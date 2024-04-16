"use client";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from './NavLink.module.css';
const NavLink = ({item})=>{
    const pathName = usePathname();
    return (
        <Link className={`${styles.container} ${
            pathName === item.path && styles.active
            }`} href={item.path}>
            {item.title}
        </Link>
        )
    }
export default NavLink