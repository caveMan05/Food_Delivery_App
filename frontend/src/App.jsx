import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import AuthContextProvider from "./Store/Context"
import Logout from "./Pages/Logout"

import Myorders from "./Pages/Myorders"

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/myorder" element={<Myorders/>}/>
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  )
}
export default App