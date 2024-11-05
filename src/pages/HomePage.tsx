
import Header from "../components/header/Header"
import Feature from "../components/home/Feature"
import Main from "../components/home/Main"
import Manager from "../components/home/Manager"




export const HomePage = () => {
  return (
    <>
        <Header showLoginButton/>
        <Main/>
        <Manager/>
        <Feature/>
    </>
  )
}
