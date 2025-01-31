import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MainContainer } from './style'
import settings from '../../../../assets/settings-svgrepo-com.svg'

const Pay = () => {
  return (
    <MainContainer>
      <div className='main_container'>
        <div className='header'>
          <h1>Payouts</h1>
          {/* <img src={settings} alt="" /> */}
        </div>
        <div className='content'>
          <div className='content_list'>
            <li><Link to=''>Success</Link></li>
            <li><Link to='/dashboard/pay/pending'>Pending</Link></li>
            <li><Link to='/dashboard/pay/processing'>Processing</Link></li>
            <li><Link to='/dashboard/pay/failed'>Failed</Link></li>
            <li><Link to='/dashboard/pay/cancelled'>Cancelled</Link></li>
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

export default Pay