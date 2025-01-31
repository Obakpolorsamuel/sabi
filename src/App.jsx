import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/login/main';
import CreateAccount from './pages/createaccount/main';
// import Dashboard from './pages/dashboard/display/main';
import DashHome from './pages/dashboard/home/main';
import Sidebar from './pages/dashboard/sidebar/main';
import Profile from './pages/dashboard/profile/display/main';
import Security from './pages/dashboard/profile/security/main';
import ProfileHome from './pages/dashboard/profile/profilehome/main';
import Preference from './pages/dashboard/profile/preference/main';
// import Payout from './pages/dashboard/profile/payout/display/main';
import Chart from './pages/dashboard/profile/payout/crypto/main';
import Bank from './pages/dashboard/profile/payout/bank/main';
import Payout from './pages/dashboard/profile/payout/display/main';
import WeChat from './pages/dashboard/profile/payout/wechat/main';
import Ip from './pages/dashboard/profile/IP/main';
import Compliance from './pages/dashboard/compliance/display/main';
import ComplianceHome from './pages/dashboard/compliance/profile/main';
import Contact from './pages/dashboard/compliance/contact/main';
import Deposit from './pages/dashboard/deposit/display/main';
import Success from './pages/dashboard/deposit/success/main';
import Pending from './pages/dashboard/deposit/pending/main';
import Processing from './pages/dashboard/deposit/processing/main';
import Failed from './pages/dashboard/deposit/failed/main';
import Cancelled from './pages/dashboard/deposit/cancelled/main';
import Pay from './pages/dashboard/pay/display/main';
import PaySuccess from './pages/dashboard/pay/success/main';
import PayPending from './pages/dashboard/pay/pending/main';
import PayProcessing from './pages/dashboard/pay/processing/main';
import PayFailed from './pages/dashboard/pay/failed/main';
import PayCancelled from './pages/dashboard/pay/cancelled/main';
import Wallet from './pages/dashboard/wallet/wallethome/main';
import WalletSuccess from './pages/dashboard/wallet/success/main';
import WalletPending from './pages/dashboard/wallet/pending/main';
import WalletFailed from './pages/dashboard/wallet/failed/main';


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/register' element={<CreateAccount />} />
        <Route path='/dashboard' element={<Sidebar />}>
          <Route index element={<DashHome />} />
          <Route path='profile' element={<Profile />}>
            <Route index element={<ProfileHome />} />
            <Route path='security' element={<Security />} />
            <Route path='payout' element={<Payout />}>
              <Route index element={<Chart />} />
              <Route path='bank' element={<Bank />} />
              <Route path='wechat' element={<WeChat />} />
            </Route>
            <Route path='preference' element={<Preference />} />
            <Route path='ip' element={<Ip />} />
          </Route>
          <Route path='compliance' element={<Compliance />}>
            <Route index element={<ComplianceHome />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          <Route path='deposits' element={<Deposit/>}>
            <Route index element={<Success/>}/>
            <Route path='pending' element={<Pending/>}/>
            <Route path='processing' element={<Processing/>}/>
            <Route path='failed' element={<Failed/>}/>
            <Route path='cancelled' element={<Cancelled/>}/>
          </Route>
          <Route path='pay' element={<Pay/>}>
            <Route index element={<PaySuccess/>}/>
            <Route path='pending' element={<PayPending/>}/>
            <Route path='processing' element={<PayProcessing/>}/>
            <Route path='failed' element={<PayFailed/>}/>
            <Route path='cancelled' element={<PayCancelled/>}/>
          </Route>
          <Route path='wallet' element={<Wallet/>}>
            <Route index element={<WalletSuccess/>}/>
            <Route path='pending' element={<WalletPending/>}/>
            <Route path='failed' element={<WalletFailed/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
