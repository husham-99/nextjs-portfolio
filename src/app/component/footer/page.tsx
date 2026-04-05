import module from './footer.module.css'
import { TbBrandNextjs } from 'react-icons/tb'


const Footer = () => {
    return (
        <div className={module.footer}>
            <TbBrandNextjs className={module.icon} />Copyrights 2024 Husham Ahmed
        </div>
    )
}

export default Footer