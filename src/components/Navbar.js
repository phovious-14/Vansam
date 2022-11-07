import React, { useContext } from 'react'
import './navbarStyle.css'
import logo from '../assets/logo2.png'
import {Link} from 'react-router-dom'
import Auth from '../context/Auth'

const Navbar = () => {

  const { connectWallet, account, isWalletInstalled } = useContext(Auth)

  return (
    <div className='nav-container'>
      <button className='btn-style'><Link to="/">Home</Link></button>
      <img src={logo} alt="" />
      {
        account === null 
        ? isWalletInstalled 
          ? <button className='btn-style' onClick={connectWallet}>Connect Wallet</button>
          : <div className='wallet-address'>
                <p>NOTE : Install Metamask Wallet</p>
            </div>
        : <div>
            <button className='btn-style' title={account}><Link to="/vansa">Your Vansa</Link></button>
            <button className='btn-style' title={account} onClick={()=>localStorage.removeItem('account')}>Disconnect</button>
            <div className='wallet-address'>
                <p>Your Vansa {account}</p>
            </div>
          </div>
      }
      
    </div>
  )
}

export default Navbar
