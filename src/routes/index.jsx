import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeAfterLogin from '../pages/HomeAfterLogin'
import HomeBeforeLogin from '../pages/HomeBeforeLogin'
import MyProfile from '../pages/MyProfile'
import PostWithComment from '../pages/PostWithComment'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import EditProfile from '../pages/EditProfile'
 
const App= () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="afterlogin" element={<HomeAfterLogin/>} />
            <Route path="/" element={<HomeBeforeLogin/>} />
            <Route path="profile" element={<MyProfile/>} />
            <Route path="comment" element={<PostWithComment/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="login" element={<Login/>} />
            <Route path="editprofile" element={<EditProfile/>} />
            <Route path="*" element={<div>404 Error not Found</div>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default App