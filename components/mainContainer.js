import Navbar from './NavBar'
import Footer from './Footer'

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}