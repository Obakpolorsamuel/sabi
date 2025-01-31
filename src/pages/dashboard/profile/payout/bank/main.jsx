import React from 'react'
import { MainContainer } from './style'

const Bank = () => {
    return (
        <MainContainer>
            <div className='columns'>
                <label>Account Number</label>
                <input type='text'></input>
            </div>
            <div className='columns'>
                <label>Bank Name</label>
                <input type='text'></input>
            </div>
            <div className='columns'>
                <label>Bank Address</label>
                <input type='text'></input>
            </div>
            <div className='columns'>
                <label>Full Name of Account owner</label>
                <input type='text'></input>
            </div>

        </MainContainer>
    )
}

export default Bank