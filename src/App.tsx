import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import Profile from "./components/profilepage/ProfilePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
