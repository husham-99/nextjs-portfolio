

import module from './services.module.css'
import { SiCssdesignawards } from 'react-icons/si'
import { IoMdBarcode } from 'react-icons/io'
import { FaCode } from 'react-icons/fa6'

const Services = () => {

    return (
        <section className='container' id='service'>
            <div className={module.heading}>
                <h5>What I Offer</h5>
                <h1>My Services</h1>
            </div>

            <div className={module.services}>
                <div className={module.serviceBox}>
                    <SiCssdesignawards className={module.icon} />
                    <h3>UI/UX Design</h3>
                    <p>I design responsive and modern user interfaces that provide a smooth user experience across all devices.</p>
                </div>

                <div className={module.serviceBox}>
                    <IoMdBarcode className={module.icon} style={{ color: 'darkorange' }} />
                    <h3>Performance Optimization</h3>
                    <p>I build fast and optimized websites using best practices and modern technologies.</p>
                </div>

                <div className={module.serviceBox}>
                    <FaCode className={module.icon} style={{ color: 'blueviolet' }} />
                    <h3>Clean & Reusable Code</h3>
                    <p>I write clean, reusable, and well‑structured code using React.js, Next.js, Tailwind, and modern development tools.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
