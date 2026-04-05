import module from './skills.module.css'
import Image from 'next/image'
import html from '../../assets/html.png'
import css3 from '../../assets/css3.svg'
import bootstrap from '../../assets/bootstrap.png'
import material from '../../assets/material.png'
import java from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'
import figma from '../../assets/figma.svg'
import nextjs from '../../assets/nextjs.jpg'
import axios from '../../assets/axios.png'
import typescript from '../../assets/typescript.png'
import github from '../../assets/github.svg'
import git from '../../assets/git.svg'
import postman from '../../assets/postman.png'
import api from '../../assets/api.png'
import nodejs from '../../assets/nodejs.svg'
import expressjs from '../../assets/expressjs.svg'
import mongodb from '../../assets/mongodb.svg'
type skills = {
    title: string;
    description: string;
    image: string;
}
let skillsData = [
    {
        id: '1',
        title: 'HTML',
        description: 'interaction',
        img: html
    },
    {
        id: '2',
        title: 'CSS 3',
        description: 'User interface',
        img: css3
    },
    {
        id: '3',
        title: 'BootStrap',
        description: 'User Interface',
        img: bootstrap
    },
    {
        id: '4',
        title: 'MUI',
        description: 'React Ui Libary',
        img: material
    },

    {
        id: '5',
        title: 'JavaScript',
        description: 'Interaction',
        img: java
    },
    {
        id: '6',
        title: 'React.Js',
        description: 'FrameWork',
        img: react
    },
    {
        id: '7',
        title: 'Tailwind',
        description: 'User Interface',
        img: tailwind
    },
    {
        id: '8',
        title: 'Figma',
        description: 'Design Tool',
        img: figma
    },
    {
        id: '9',
        title: 'Next.Js',
        description: 'FrameWork',
        img: nextjs
    },
    {
        id: '10',
        title: 'Axios',
        description: 'HTTP Client',
        img: axios
    },
    {
        id: '11',
        title: 'TypeScript',
        description: 'FrameWork',
        img: typescript
    },
    {
        id: '12',
        title: 'GitHub',
        description: 'V.Controller',
        img: github
    },
    {
        id: '13',
        title: 'Git',
        description: 'V.Controller',
        img: git
    },
    {
        id: '14',
        title: 'Postman',
        description: 'Api Testing',
        img: postman
    },
    {
        id: '15',
        title: 'API',
        description: 'HTTP Requests',
        img: api
    },
    {
        id: '16',
        title: 'Node.Js',
        description: 'Web Server',
        img: nodejs
    },
    {
        id: '17',
        title: 'Express.Js',
        description: 'FrameWork',
        img: expressjs
    },

    {
        id: '18',
        title: 'Mongodb',
        description: 'Data-Base',
        img: mongodb
    }
]

const Skills = () => {

    return (
        <section className='container' id='skill'>
            <div className={module.heading}>
                <h5>what skills i have</h5>
                <h1>My Experince</h1>
            </div>
            <div className={module.skillsContainer}>
                {skillsData.map(({ img, title, description, id }) => (
                    <div key={id} className={module.main}>
                        <div className={module.pic}>
                            <Image src={img} alt='pic' width='50' height='50' />
                        </div>
                        <div className={module.info}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}


            </div>
        </section>
    )
}

export default Skills