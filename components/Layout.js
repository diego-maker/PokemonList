import NavBar from './NavBar'
import Footer from './Footer';
import Head from 'next/head';
export default function Layout() {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href='/images/favicon.ico'></link>
            <title>PokeNext</title>
        </Head>
            <NavBar />
            <main className='main-container'>
            </main>
            <Footer />
        </>
    )
}