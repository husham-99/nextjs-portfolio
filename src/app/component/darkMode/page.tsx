'use client'
import React, { useState, useEffect } from 'react'
import module from './darkMode.module.css'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            setDarkMode(saved === 'true');
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(prev => !prev)}>
            {darkMode
                ? <MdOutlineLightMode className={module.lightIcon} />
                : <MdDarkMode className={module.darkIcon} />
            }
        </button>
    );
}
