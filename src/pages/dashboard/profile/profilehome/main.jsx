import React from 'react'
import { MainContainer } from './style'

const ProfileHome = () => {
    return (
        <MainContainer>
            <div className='card'>
                <div>
                    <h1>Profile</h1>
                </div>
                <nav>
                    <label>Company Name</label>
                    <input type='text' value={'CHAINCONSULT LIMITED'} readOnly></input>
                </nav>
                <div className='details'>
                    <nav>
                        <label>Email</label>
                        <input type='text' value={'CHAINCONSULT LIMITED'} readOnly></input>
                    </nav>
                    <nav>
                        <label>Phone</label>
                        <input type='text' value={'CHAINCONSULT LIMITED'} readOnly></input>
                    </nav>
                </div>
            </div>
        </MainContainer>
    )
}

export default ProfileHome