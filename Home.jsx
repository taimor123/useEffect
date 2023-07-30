import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>    
      <div className="homecontainer">container</div>
    </div>
  )
}

export default Home;
