'use client'
import { FaArrowUp } from "react-icons/fa6";
import 'animate.css'
import module from './backToTop.module.css'

const BackToTop = () => {
    function Top() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <section className={module.top} onClick={Top}
            style={{
                width: '30px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.226)', color: 'var(--color-primary)', border: '1px solid var(--color-primary-variant)', borderRadius: '5PX',
                marginLeft: 'auto', marginTop: '50px', cursor: 'pointer'
            }}>
            <FaArrowUp />
        </section>
    )
}

export default BackToTop