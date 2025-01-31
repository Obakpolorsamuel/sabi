import React from 'react'
import { MainContainer } from './style'

const Preference = () => {
    return (
        <MainContainer>
            <div className='card'>
                <div className='header'>
                    <h1>Account Preference</h1>
                </div>
                <div className='details'>
                    <nav>
                        <h3>Payment Currency</h3>
                        <p>Currency to receive payment in from your customers</p>
                    </nav>
                    <div className='zmw'>
                        ZMW
                    </div>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
        </MainContainer>
    )
}

export default Preference