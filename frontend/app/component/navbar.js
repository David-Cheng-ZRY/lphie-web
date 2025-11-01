"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export default function NavBar(){
    const pathname = usePathname()
    return(
        <div>
            {/* Image Dimensions 360x144 pixels */}
            <div className={styles.lphie}><Image src="/lphie.png" width={120} height={48}/></div>
            <nav className={styles.navContainer}>
                <ul className={styles.navList}>
                    <Link className={pathname === '/' ? styles.active :styles.link} href='/'>Home</Link>
                    <Link className={pathname === '/about' ? styles.active :styles.link} href='/about'>About</Link>
                    <Link className={pathname === '/recruitment' ? styles.active :styles.link} href='/recruitment'>Recruitment</Link>
                    <Link className={pathname === '/roster' ? styles.active :styles.link} href='/roster'>Roster</Link>
                    <Link className={pathname === '/active' ? styles.active :styles.link} href='/active'>Active</Link>
                </ul>
            </nav>
        </div>
    );
}

