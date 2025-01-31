import React from 'react'
import { MainContainer } from './style'

export default function ComplianceHome() {
    return (
        <MainContainer>
            <div className='down'>
                <div className='down_partt'>
                    <div>
                        <h1>Profile</h1>
                    </div>
                    <nav className='business'>
                        <div>
                            <h2>Business Name</h2>
                            <p>CHAINCONSULTS LIMITED</p>
                        </div>
                        <div>
                            <h2>Industry</h2>
                            <p>Education</p>
                        </div>
                    </nav>
                    <div className='description'>
                        <nav>
                            <h1>Description</h1>
                            <p>We are a great company</p>
                        </nav>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}
