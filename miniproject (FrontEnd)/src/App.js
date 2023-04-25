import React from 'react'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import Login from './Components/Login'
import Pricing from './Components/Pricing'
import Service from './Components/Service'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Components/Globalstyle'
import Error from './Components/Error'
import GoToTop from './Components/GoToTop'
import {ToastContainer,toast} from 'react-toastify'
import SignUp from './Components/SignUp'
import BookNow from './Components/BookNow'
import ShowHideFunctionality from './Components/ShowHideFunctionality'
import RoadSideAssistance from './Components/RoadSideAssistance'
import AdminLogin from './Admin/AdminLogin'
import AdminDashBoard from './Admin/AdminDashBoard'
import 'react-toastify/dist/ReactToastify.css';
import GetTrail from './Admin/GetTrail'
import GetAllBBoking from './Admin/GetAllBBoking'
import Sudopricing from './Components/Sudopricing'
 

const App = () => {

  const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#CC3F31",
      bg: "rgb(250 186 3)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
   
   <ThemeProvider theme={theme}>
 <GlobalStyle />
<BrowserRouter>
<ToastContainer position='bottom-center'/>
<Header/>
 <Routes>
 <Route path="/" element={<Home />}/>
 <Route path="/about" element={<AboutUs />}/>
 <Route path="/price" element={<Pricing />}/>
 <Route path="/contact" element={<ContactUs />}/>
 <Route path="/signup" element={<SignUp/>}/>
 <Route path="/login" element={<Login  />}/>
 <Route path="/booknow" element={<BookNow/>}/>
 <Route path="/service" element={<Service/>}/>
 <Route path="/radio" element={<ShowHideFunctionality/>}/>
 <Route path="/rsa" element={<RoadSideAssistance/>}/>
 <Route path="/admin" element={<AdminLogin/>}/>
 <Route path="/admindashboard" element={<AdminDashBoard/>}/>
 <Route path="/getresult" element={<GetTrail/>}/>
 <Route path="/result" element={<GetAllBBoking/>}/>
 <Route path="/pricing" element={<Sudopricing/>}/>
 <Route path="*" element={<Error  />}/>
 </Routes>
 <GoToTop/>
 <Footer/>
</BrowserRouter>
</ThemeProvider>

  )
}

export default App
