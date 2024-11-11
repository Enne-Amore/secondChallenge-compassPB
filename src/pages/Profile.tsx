import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProfileAct from '../components/profile/ProfileActivities'

const Profile = () => {
  return (
    <div>
        <Header showNavbar/>
        <ProfileAct/>
        <Footer/>
    </div>
  )
}

export default Profile