import { Route, Routes } from "react-router-dom";
import Login from "./assets/auth/Login"
import SignUp from "./assets/auth/SignUp";
import SplashScreen from "./assets/components/SplashScreen";
import Search from "./assets/components/Search";
function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<SplashScreen/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Search' element={<Search/>}/>
      </Routes>
    </div>
  )
}

export default App