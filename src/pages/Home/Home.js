import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'
import bgimg from '../../assets/bg-tree.png'
import bgimg2 from '../../assets/bgimg2.png'
import About from '../../components/About/About'

const Home = () => {

  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-quote'>
        <span><p>VANSAM</p><br /> The Family Tree App That Lets You Preserve Your Family Data</span>
        <img className='bgimg' src={bgimg} alt="" />
      </div>
      <div className='home-quote2'>
        <img className='bgimg2' src={bgimg2} alt="" />
        <span><p>VANSAM</p><br /> The Family Tree App That Lets You Create Your Own NFT</span>
      </div>
      <About />
    </div>
  )
}

export default Home
