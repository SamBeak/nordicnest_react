import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component List
import FooterComponent from './wrap/FooterComponent'
import HeaderComponent from './wrap/HeaderComponent'
import HomeComponent from './wrap/HomeComponent'
import OnTopComponent from './wrap/OnTopComponent'
// CustomerServiceComponent
import CustomerService from './wrap/cs/CustomerService'
import CustomerContact from './wrap/cs/CustomerContact'
import CustomerTrack from './wrap/cs/CustomerTrack'
import CustomerShopingInfo from './wrap/cs/CustomerShopingInfo'
import CustomerReturnPolicy from './wrap/cs/CustomerReturnPolicy'
import CustomerReturn from './wrap/cs/CustomerReturn'
import CustomerTermsCondition from './wrap/cs/CustomerTermsCondition'
import CustomerPrivacyPolicy from './wrap/cs/CustomerPrivacyPolicy'
import CustomerCookies from './wrap/cs/CustomerCookies'
import CustomerFaq from './wrap/cs/CustomerFaq'

export default function WrapComponent() {
  return (
    <div id="wrap">
      <OnTopComponent />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderComponent />} >
            <Route index element={<HomeComponent />} />
            <Route path='/home' element={<HomeComponent />} />

            {/*Customer-Service */}
            <Route path='/cs' element={<CustomerService />} />
            <Route path='/contact' element={<CustomerContact />} />
            <Route path='/track-trace' element={<CustomerTrack />} />
            <Route path='/shop-info' element={<CustomerShopingInfo />} />
            <Route path='/return-policy' element={<CustomerReturnPolicy />} />
            <Route path='/return' element={<CustomerReturn />} />
            <Route path='/terms-conditions' element={<CustomerTermsCondition />} />
            <Route path='/privacy-policy' element={<CustomerPrivacyPolicy />} />
            <Route path='/cookies' element={<CustomerCookies />} />
            <Route path='/faq' element={<CustomerFaq />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <FooterComponent />
    </div>
  )
}
