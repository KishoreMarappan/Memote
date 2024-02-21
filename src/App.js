import React from 'react'
import ContentManager from './Components/ContentManager';
import Login from './Components/Login';
import Register from './Components/Register';
import Admin from './Components/Admin';
import Home from './Components/Home';
import { Routes,Route} from 'react-router-dom'
import Home1 from './Components/Home1';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import AddWork from './Components/AddWork';
import Main from './Components/Main';
import AdminMain from './Components/AdminMain';
import AdminHome from './Components/AdminHome';
import UserManager from './Components/UserManager';
import LeaderBoard from './Components/LeaderBoard';
import AdminHead from './Components/AdminHead';
import AdminLeaderBoard from './Components/AdminLeaderBoard';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/AdminHome' element={<AdminHome/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/AdminMain' element={<AdminMain/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/EditProfile' element={<EditProfile/>}></Route>
      <Route path='/AddWork' element={<AddWork/>}></Route>
      <Route path='/LeaderBoard' element={<LeaderBoard/>}></Route>
      <Route path='/ContentManager' element={<ContentManager/>}></Route>
      <Route path='/UserManager' element={<UserManager/>}></Route>
      <Route path='/AdminHead' element={<AdminHead/>}></Route>
      <Route path='/AdminLeaderBoard' element={<AdminLeaderBoard/>}></Route>
    </Routes>
  );
}

