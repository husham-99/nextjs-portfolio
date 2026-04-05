
import Image from 'next/image'
import img from '../../assets/me.jpg'
import './home.css'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'





const HomePage = () => {
    return (
        <section className='container' id='home'>
            <div className='main-content'>
                <div className="main">
                    <div className="info">
                        <h1>Husham Ahmed</h1>
                        <h2>Frontend Developer</h2>
                        <div className="btn">
                            <Link href={'/cv.pdf'} download={true}><button className='cv'>Download CV</button></Link>
                            <Link href={'#contact'}><button className='touch'>Get In Touch</button></Link>
                        </div>
                        <div className="social">
                            <Link className='link' href='https://api.whatsapp.com/send?phone=966501637943'> <FaWhatsapp /> </Link>
                            <Link className='link' href='dontknow.com'><FaFacebookF /></Link>
                            <Link className='link' href={`https://mail.google.com/mail/?view=cm&fs=1&to=hushamahmed388@gmail.com`} target='blank'><MdOutlineMailOutline /></Link>
                        </div>
                    </div>
                    <div className="img">
                        <Image src={img} alt='image' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomePage