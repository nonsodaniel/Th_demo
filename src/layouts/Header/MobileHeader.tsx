
import { useState } from 'react'
import styles from './header.module.css'

const MobileHeader: React.FC<{ handleToggle: (state: boolean) => void; }> =
    ({ handleToggle }) => {

        const [isNav, setIsNav] = useState(true)
        const toggler = () => {
            setIsNav(!isNav)
            handleToggle(isNav)
            return isNav
        }
        return (
            <div className={styles.mobile}>
                <h1>Honesto</h1>
                <i className={`fas fa-bars ${styles.mobile_icon}`} onClick={toggler}></i>
            </div>
        )
    }

export default MobileHeader
