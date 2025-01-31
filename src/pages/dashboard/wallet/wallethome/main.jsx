import React from 'react'
import { MainContainer } from './style'
import { Link } from 'react-router-dom'
import Withdraw from '../display/main'

const Wallet = () => {
    return (
        <MainContainer>
            <div>
                <h1>Account</h1>
            </div>
            <div className='card'>
                <div className='heads_container'>
                    <div className='heads'>
                        <h2>Balance</h2>
                        <h1>4.00 ZMW</h1>
                    </div>
                    <div className='heads'>
                        <h2>Balance</h2>
                        <h1>4.00 ZMW</h1>
                    </div>
                    <div className='heads'>
                        <h2>Balance</h2>
                        <h1>4.00 ZMW</h1>
                    </div>
                    <div className='heads'>
                        <h2>Balance</h2>
                        <h1>4.00 ZMW</h1>
                    </div>
                </div>
                <div className='details'>
                    <button>
                        Withdraw
                    </button>
                </div>
            </div>
            {/* 2 */}
            <div className='with'>
                <h1>Withdrawls</h1>
            </div>
            <Withdraw/>
        </MainContainer>
    )
}

export default Wallet