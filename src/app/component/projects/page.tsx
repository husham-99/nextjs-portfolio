import module from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import ecommerc1 from '../../assets/electro-mart.png'
import ecommerc2 from '../../assets/digi-store.png'
import tasks from '../../assets/tasks.jpeg'
import hotel from '../../assets/hotel-resevation.jpeg'
import memoryGame from '../../assets/memorygame.jpeg'
import adthan from '../../assets/adhan.jpeg'
import quisApp from '../../assets/quis-app.jpeg'
import building from '../../assets/الفجر الساطع.jpeg'
import silverDesign from '../../assets/silver-design.jpeg'
import wether from '../../assets/weatherhub.jpeg'


const porjectsData = [
    {
        id: 1,
        img: ecommerc1,
        title: "E-Commerce 1",
        github: 'https://github.com/Maxii109/ecommerce-1',
        demo: 'https://maxii109.github.io/ecommerce-1/'

    },
    {
        id: 2,
        img: ecommerc2,
        title: "E-Commerce 2",
        github: 'https://github.com/Maxii109/ecommerce-2',
        demo: 'https://maxii109.github.io/ecommerce-2/'

    },
    {
        id: 3,
        img: tasks,
        title: "Tasks Planner",
        github: 'https://github.com/Maxii109/task3',
        demo: 'https://maxii109.github.io/task3/'

    },
    {
        id: 4,
        img: hotel,
        title: "Hotels Reservation",
        github: 'https://github.com/husham-99/hotels',
        demo: 'https://husham-99.github.io/hotels'

    },
    {
        id: 5,
        img: memoryGame,
        title: "Memory Game",
        github: 'https://github.com/husham-99/memory-game',
        demo: 'https://husham-99.github.io/memory-game'

    },
    {
        id: 6,
        img: adthan,
        title: "Adhan Timing",
        github: 'https://github.com/husham-99/adhan',
        demo: 'https://husham-99.github.io/adhan'

    },
    {
        id: 7,
        img: quisApp,
        title: "Quis App",
        github: 'https://github.com/husham-99/quis-app',
        demo: 'https://husham-99.github.io/quis-app'

    },
    {
        id: 8,
        img: building,
        title: "Building Project",
        github: 'https://github.com/husham-99/building-project',
        demo: 'https://husham-99.github.io/building-project'

    },

    {
        id: 9,
        img: silverDesign,
        title: "Silver Design",
        github: 'https://github.com/husham-99/s.design',
        demo: 'https://husham-99.github.io/s.design'

    },
    {
        id: 10,
        img: wether,
        title: "WeatherHub",
        github: 'https://github.com/Maxii109/weather-app',
        demo: 'https://maxii109.github.io/weather-app'

    }


]

const Projects = () => {
    return (
        <section className='container' id='project'>
            <div className={module.heading}>
                <h5>my recent work</h5>
                <h1>Projects</h1>
            </div>
            <div className={module.projects}>

                {porjectsData.map(({ id, img, title, github, demo }) => (
                    <div key={id} className={module.projectBox}>
                        <div className={module.img}>
                            <Image src={img} alt='img' width='300' height='300' />
                        </div>
                        <h3>{title}</h3>
                        <div className={module.btn}>
                            <Link href={github} target='_blank'><button className={module.gitHub}><i><FaGithub /></i>Show Code</button></Link>
                            <Link href={demo} target='_blank'><button className={module.demo}><i><FaArrowUpRightFromSquare /></i>Live Demo</button></Link>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects