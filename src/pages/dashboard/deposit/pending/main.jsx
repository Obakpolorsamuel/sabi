import React from 'react'
import { MainContainer } from './style'

const Pending = () => {
    return (
        <MainContainer>
            <div className='cards'>
                <table>
                    <thead>
                        <tr className='bg'>
                            <th>Amount</th>
                            <th>Email</th>
                            <th>Account</th>
                            <th>Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr className='bgg'>
                            <td>ZMW 10</td>
                            <td>mundia@getsparco.com</td>
                            <td>0976540728</td>
                            <td>Fri 23 Aug 09:49am</td>
                            <td>Details</td>
                        </tr>
                        <tr className='bgg'>
                            <td>ZMW 5</td>
                            <td>mundia@getsparco.com</td>
                            <td>0976540728</td>
                            <td>Fri 23 Aug 08:55am</td>
                            <td>Details</td>
                        </tr>
                    </tbody> */}
                </table>
                <div className='bottom'>
                    <p>No IP Whitelisted</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default Pending