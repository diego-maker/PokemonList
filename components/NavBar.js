import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <>
            <nav className={Styles.Navbar}>
                <div className={Styles.logo}>
                    <Image
                        src={'/images/pokeball.png'}
                        height="30"
                        width="30"
                        alt="pokeball" />
                    <h1>PokeNext</h1>
                </div>
                <ul className={Styles.link_items}>
                    <li>
                        <Link href={'/about'}><a>Sobre</a></Link>
                    </li>
                    <li>
                        <Link href={'/'}><a>Home</a></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}