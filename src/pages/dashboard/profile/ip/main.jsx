import React from 'react'
import { MainContainer } from './style'

const Ip = () => {
    return (
        <MainContainer>
            <div className='card'>
                <div>
                    <h1>Whitelist IP</h1>
                </div>
                <div className='columns'>
                    <label>IP Address</label>
                    <input type='text'></input>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
            <div className='cards'>
                <div className='head_part'>
                    <div className='writeup'>
                        <span>IP Address</span>
                    </div>
                    <div className='writeup'>
                        <span>Remove</span>
                    </div>
                </div>
                <div className='bottom'>
                    <p>No IP Whitelisted</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default Ip