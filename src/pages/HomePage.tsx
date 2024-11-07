
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Feature from "../components/home/Feature"
import Main from "../components/home/Main"
import Manager from "../components/home/Manager"
import Subscribe from "../components/home/Subscribe"

export const HomePage = () => {
  return (
    <>
        <Header />
        <Main/>
        <Manager/>
        <Feature/>
        <Subscribe/>
        <Footer/>
    </>
  )
}
