import { Link } from "react-router-dom"
import styles from "./header.module.css"

function Header() {
    
    return (
        <div id={styles.header}>
            <h1>Review de filmes</h1>
            <ul id={styles.links}>
                <li><Link to={'/'} className={styles.link}>Home</Link></li>
                <li><Link to={'/cadastro'} className={styles.link}>Cadastro</Link></li>
            </ul>
        </div>
    )
}

export default Header