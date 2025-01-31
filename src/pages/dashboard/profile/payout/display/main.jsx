import React from 'react'
import { MainContainer } from './style'
import { Link, Outlet } from 'react-router-dom'

const Payout = () => {
    return (
        <MainContainer>
            <div className='card'>
                {/* <div>
                    <h1>Profile</h1>
                </div> */}
                <div className='header'>
                    <div className='header_links'>
                        <li><Link to={''}>Crypto</Link></li>
                        <li><Link to={'/dashboard/profile/payout/bank'}>Bank</Link></li>
                        <li><Link to={'/dashboard/profile/payout/wechat'}>WeChat</Link></li>
                    </div>
                </div>
                <div className='details'>
                    <Outlet/>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
        </MainContainer>
    )
}

export default Payout