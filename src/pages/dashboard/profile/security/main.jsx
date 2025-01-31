import React from 'react'
import { MainContainer } from './style'

const Security = () => {
    return (
        <MainContainer>
            <div className='card'>
                <div>
                    <h1>Change Password</h1>
                </div>
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
                <div>
                    <button>Save</button>
                </div>
            </div>
            <div className='card'>
                <div>
                    <h1>Transaction PIN</h1>
                </div>
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
                <div>
                    <button>Save</button>
                </div>
            </div>
        </MainContainer>
    )
}

export default Security