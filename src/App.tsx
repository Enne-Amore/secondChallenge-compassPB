import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Login } from "./pages/Login"
import { Error403 } from "./pages/error403"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/error403" element= {<Error403/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
