import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MainContainer } from './style'
import settings from '../../../../assets/settings-svgrepo-com.svg'

const Profile = () => {
  return (
    <MainContainer>
      <div className='main_container'>
        <div className='header'>
          <h1>Profile Settings</h1>
          <img src={settings} alt="" />
        </div>
        <div className='content'>
          <div className='content_list'>
            <li><Link to=''>Profile</Link></li>
            <li><Link to='/dashboard/profile/security'>Security</Link></li>
            <li><Link to='/dashboard/profile/payout'>Payouts</Link></li>
            <li><Link to='/dashboard/profile/preference'>Preferences</Link></li>
            <li><Link to=''>Api & Documentation</Link></li>
            <li><Link to='/dashboard/profile/ip'>IP Whitelist</Link></li>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export default Profile