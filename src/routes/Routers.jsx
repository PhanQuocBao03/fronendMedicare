import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Singup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../DashBoard/user-account/MyAccount";
import DashBoard from "../DashBoard/doctor-account/DashBoard";
import ProtectedRoute from "./ProtectedRoute";

import {Routes, Route}  from 'react-router-dom'
const Routers = () =>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:id" element={<DoctorDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Singup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>} />
        <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><DashBoard /></ProtectedRoute>} />
        
    </Routes>
}

export default Routers