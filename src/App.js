
import './App.css';
import Navbar from './MyComponents/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Login from './MyComponents/Login';
import SignUp from './MyComponents/SignUp';
import Profile from './MyComponents/Profile';
import Forms from './MyComponents/Forms';
import HomePage from './MyComponents/HomePage';
import Dashboard from './MyComponents/Dashboard';
import BuyMachines from './MyComponents/BuyMachines';
import Connections from './MyComponents/Connections';
import MachineDetails from './MyComponents/MachineDetails';
import Settings from './MyComponents/Settings';
import SellResidue from './MyComponents/SellResidue';
import ChangePassword from './MyComponents/ChangePassword';
import Demo from './MyComponents/Demo';
import Cart from './MyComponents/Cart';

function App() {
  return (
    <>
  
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />}/>
      <Route path="forms" element={<Forms />} />
      <Route path="home" element={<HomePage />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="buy" element={<BuyMachines />} />
      <Route path="sellresidue" element={<SellResidue />} />
      <Route path="connections" element={<Connections />} />
      <Route path="MachineDetails" element={<MachineDetails />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="ChangePassword" element={<ChangePassword />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />

      <Route path="demo" element={<Demo />} />

      
      <Route path="Forms" element={<Forms />} />
      {/* 
      
      
      
      <Route path="newpost" element={<NewPost />}/>
      <Route path="myprofile" element={<MyProfile />}/> */}
    </Routes>
    
    </>
  );
}
 
export default App;
