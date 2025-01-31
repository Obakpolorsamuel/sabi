import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MainContainer } from './style'
import settings from '../../../../assets/settings-svgrepo-com.svg'

const Deposit = () => {
  return (
    <MainContainer>
      <div className='main_container'>
        <div className='header'>
          <h1>Deposits</h1>
          {/* <img src={settings} alt="" /> */}
        </div>
        <div className='content'>
          <div className='content_list'>
            <li><Link to=''>Success</Link></li>
            <li><Link to='/dashboard/deposits/pending'>Pending</Link></li>
            <li><Link to='/dashboard/deposits/processing'>Processing</Link></li>
            <li><Link to='/dashboard/deposits/failed'>Failed</Link></li>
            <li><Link to='/dashboard/deposits/cancelled'>Cancelled</Link></li>
            {/* <li><Link to='/dashboard/profile/ip'>IP Whitelist</Link></li> */}
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export default Deposit