import Styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function about() {
    return (
        <>
            <div className="main-container">
                <div className={Styles.About}>
                    <h1>Framework em NextJS</h1>
                </div>
                <div className={Styles.About}>
                    <Image src={"/images/charizard.png"} width="450" height="250" alt="charizardImage" />
                </div>
                <div className={Styles.About}>
                   <h1>Desenvolvido por diego  </h1>
                </div>
            </div>

        </>
    )
}