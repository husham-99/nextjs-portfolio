'use client'

import Link from "next/link"
import module from './header.module.css'
import { useState } from "react"
// import { DiJqueryLogo } from "react-icons/di";
import { TbBrandNextjs } from 'react-icons/tb'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Darkmode from '../darkMode/page'
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa6";


const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <header className={module.header}>
                <div className='container'>
                    <nav className={module.navbar}>
                        <div className={module.logo}>
                            <Link href='/'><TbBrandNextjs /></Link>
                        </div>

                        <div className={module.menu} >
                            <div className={module.themeIcon}>
                                <Darkmode />
                            </div>
                            <div onClick={() => { setToggle(prev => !prev) }}>
                                {toggle ? <IoClose /> : <FaBars />}
                            </div>
                        </div>


                        <div className={module.navLinksWrapper}
                            style={{ clipPath: toggle ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : '' }}>
                            <ul className={module.navLinks} >

                                <li>
                                    <FaHome className={module.navIcon} />
                                    <Link onClick={() => { setToggle(false) }} className={`${module.navLink} ${module.active}`} href='#home'>Home</Link>
                                </li>
                                <li>
                                    <BsGooglePlay className={module.navIcon} />
                                    <Link onClick={() => { setToggle(false) }} className={module.navLink} href='/#skill'>Skills</Link>
                                </li>
                                <li>
                                    <FaServicestack className={module.navIcon} />
                                    <Link onClick={() => { setToggle(false) }} className={module.navLink} href='/#service'>Services</Link>
                                </li>
                                <li>
                                    <GrProjects className={module.navIcon} />
                                    <Link onClick={() => { setToggle(false) }} className={module.navLink} href='/#project'>Projects</Link>
                                </li>
                                <li>
                                    <RiContactsFill className={module.navIcon} />
                                    <Link onClick={() => { setToggle(false) }} className={module.navLink} href='/#contact'>Contacts</Link>
                                </li>
                            </ul>
                            <div className={module.themeIcon}>
                                <Darkmode />
                            </div>

                        </div>
                    </nav >
                </div>

            </header >
            <div className={module.navBg} style={{ clipPath: toggle ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : '' }}></div>

        </>
    )
}

export default Header