import React from 'react'
import { MainContainer } from './style'
import tick from "../../../../assets/tick-circle-svgrepo-com.svg";
import tick1 from "../../../../assets/tick-circle-svgrepo-com copy.svg";
import { Link, Outlet } from 'react-router-dom';

export default function Compliance() {
    return (
        <MainContainer>
            <div className='main_container'>
                <div>
                    <div>
                        <h1>Compliance</h1>
                    </div>
                    <div className='button_container'>
                        <button>
                            <img src={tick} alt="" />
                            Live Mode
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className='links'>
                        <li><img src={tick1} alt="" /><Link to=''>Profile</Link></li>
                        <li><img src={tick1} alt="" /><Link to='/dashboard/compliance/contact'>Contact</Link></li>
                        <li><img src={tick1} alt="" /><Link to=''>Documents</Link></li>
                    </div>
                    <div className='down_part'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}
