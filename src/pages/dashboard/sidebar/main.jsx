import React from 'react'
import { MainContainer } from './style'
import grid from "../../../assets/grid-svgrepo-com.svg";
import profile from "../../../assets/profile.svg";
import compliance from "../../../assets/compliance.svg";
import transaction from "../../../assets/transaction.svg";
import user from "../../../assets/users.svg";
import wallet from "../../../assets/wallet.svg";
import logo from '../../../assets/sab.png'
import logout from '../../../assets/logout-svgrepo-com.svg'
import close from '../../../assets/close-corner-arrow-2-svgrepo-com.svg'
import { Link, Outlet } from 'react-router-dom';


const Sidebar = () => {
    return (
        <MainContainer>
            <aside>
                <div className='logo'>
                    <div>
                        <img className='main_logo' src={logo} alt="" />
                    </div>
                    <div>

                        {/* <img className='close_logo' src={close} alt=''/> */}
                    </div>
                </div>
                <div className='links_container'>
                    <div>
                        <h2>ACCOUNT</h2>
                    </div>
                    <div className='lists'>
                        <li><img src={grid} alt="" /><Link to=''>Dashboard</Link></li>
                        <li><img src={profile} alt="" /><Link to='/dashboard/profile'>Profile</Link></li>
                        <li><img src={compliance} alt="" /><Link to='/dashboard/compliance'>Compliance</Link></li>
                    </div>
                </div>
                <div className='links_container'>
                    <div>
                        <h2>PAYMENTS</h2>
                    </div>
                    <div className='lists'>
                        <li><img src={transaction} alt="" /><Link to='/dashboard/deposits'>Deposits</Link></li>
                        <li><img src={user} alt="" /><Link to='/dashboard/pay'>Payouts</Link></li>
                        <li><img src={wallet} alt="" /><Link to='/dashboard/wallet'>Wallet</Link></li>
                    </div>
                </div>
                <div className='links_container'>
                    <div>
                        <h2>CHAINCONSULT LIMITED</h2>
                    </div>
                    <div className='lists'>
                        <li><img src={logout} alt="" /><Link to='/dashboard/deposits'>Logout</Link></li>
                    </div>
                </div>
            </aside>
            <div className='outlet'>
                <Outlet />
            </div>
        </MainContainer>
    )
}

export default Sidebar