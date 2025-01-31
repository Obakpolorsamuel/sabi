import React from 'react'
import { MainContainer } from './style'
import graph from '../../../assets/x02vh49w.svg'
import menu from '../../../assets/menu.svg'
import tick from "../../../assets/tick-circle-svgrepo-com.svg";
import dollar from "../../../assets/dollar-coin-svgrepo-com.svg";

const DashHome = () => {
    return (
        <MainContainer>
            <div className='main_container'>
                {/* left */}
                <div className='left'>
                    <nav>
                        <h1>Welcome to SabiPay 👋</h1>
                        <p>Collect payments from Business across Africa with ease</p>
                    </nav>
                    <div className='balance_container'>
                        <nav>
                            <h2>Balance</h2>
                            <h1>$0.19</h1>
                        </nav>
                        <div>
                            <h2>Available</h2>
                        </div>
                    </div>
                    <div className='graph_container'>
                        <div className='menu'>
                            <img src={menu} alt="" />
                        </div>
                        <div>
                            <img src={graph} alt="" />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='right'>
                    <div className='button_container'>
                        <button>
                            <img src={tick} alt="" />
                            Live Mode
                        </button>
                    </div>
                    <div>
                        <div className='account_container'>
                            <h1>Account</h1>
                        </div>
                        <div className='right_down'>
                            <div className='button_contain'>
                                <div className='left_side'>
                                    <div className='img_contain'>
                                        <img src={dollar} alt="" />
                                    </div>
                                    <div className='writeup'>
                                        <h3>Balance (USD)</h3>
                                        <span>Thu 30 Jan</span>
                                    </div>
                                </div>
                                <div>
                                    <h3>$0.19</h3>
                                </div>
                            </div>
                            <div className='button_contain'>
                                <div className='left_side'>
                                    <div className='img_contain'>
                                        <img src={dollar} alt="" />
                                    </div>
                                    <div className='writeup'>
                                        <h3>Balance (USD)</h3>
                                        <span>Thu 30 Jan</span>
                                    </div>
                                </div>
                                <div>
                                    <h3>$0.19</h3>
                                </div>
                            </div>
                            <div className='button_contain'>
                                <div className='left_side'>
                                    <div className='img_contain'>
                                        <img src={dollar} alt="" />
                                    </div>
                                    <div className='writeup'>
                                        <h3>Balance (USD)</h3>
                                        <span>Thu 30 Jan</span>
                                    </div>
                                </div>
                                <div>
                                    <h3>$0.19</h3>
                                </div>
                            </div>
                            <div className='button_contain'>
                                <div className='left_side'>
                                    <div className='img_contain'>
                                        <img src={dollar} alt="" />
                                    </div>
                                    <div className='writeup'>
                                        <h3>Balance (USD)</h3>
                                        <span>Thu 30 Jan</span>
                                    </div>
                                </div>
                                <div>
                                    <h3>$0.19</h3>
                                </div>
                            </div>
                            <div className='button_contain'>
                                <div className='left_side'>
                                    <div className='img_contain'>
                                        <img src={dollar} alt="" />
                                    </div>
                                    <div className='writeup'>
                                        <h3>Balance (USD)</h3>
                                        <span>Thu 30 Jan</span>
                                    </div>
                                </div>
                                <div>
                                    <h3>$0.19</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default DashHome