import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import App from './App.jsx'
import Sidebar from './pages/Sidebar.jsx'
import Ad from './pages/Ad.jsx'
import Ads from './pages/Ads.jsx'
import Email from './pages/Email.jsx'
import Banner from './pages/Banner.jsx'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
<Header/>
<Sidebar/>
<App/>

<Ad/>

<Ads/>
<Email/>
<Banner/>

<Footer/>

</>

)
