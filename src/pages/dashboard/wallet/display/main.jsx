import React from 'react'
import { MainContainer } from './style'
import { Link, Outlet } from 'react-router-dom'

const Withdraw = () => {
    return (
        <MainContainer>
            <div className='card'>
                {/* <div>
                    <h1>Profile</h1>
                </div> */}
                <div className='header'>
                    <div className='header_links'>
                        <li><Link to={''}>Success</Link></li>
                        <li><Link to={'/dashboard/wallet/pending'}>Pending</Link></li>
                        <li><Link to={'/dashboard/wallet/failed'}>Failed</Link></li>
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
                {/* <div>
                    <button>Save</button>
                </div> */}
            </div>
        </MainContainer>
    )
}

export default Withdraw