import Link from "next/link";

import MainHeaderBackround from "./main-header-background";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from  './main-header.module.css';

export default function MainHeader() {
    return ( 
        <>
        <MainHeaderBackround />
        <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
            <Image src={logoImg} priority/>
            next food
        </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href={'/meals'}>Brolw</Link>
                    </li>
                </ul>
            </nav>
        </header> 
        </>
    )
} 