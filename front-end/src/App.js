import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import HomePage from './components/homepage/HomePage';
import Products from './components/homepage/Products';
import Productdetails from './components/homepage/Productdetails';
import Categories from './components/homepage/Categories';
import Categoriedeatails from './components/homepage/Categoriedeatails';
import Offers from './components/homepage/Offers';
import Empty from './components/homepage/Empty';
import About from './components/homepage/About';
import Contact from './components/homepage/Contact';
import Cart from './components/cart/Cart';
import Test from './components/homepage/test';


import Admin from './admin/main';
import Admins from './admin/admins/admin';
import EditAdmin from './admin/admins/editadmin';
import DeleteAdmin from './admin/admins/AdminDelete';
import EditUser from './admin/users/editUser';
import DeleteUser from './admin/users/deleteUser';
import AdminCategory from './admin/category/category';
import UserProfile from './components/Profile/UserProfile';
import AdminUsers from './admin/users/users';
import AdminLogin from './admin/register/adminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/admin" element={<Admin />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/edit/:UserId" element={<EditUser />} />
        <Route path="/admin/users/delete/:UserId" element={<DeleteUser />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/edit/:id" element={<EditAdmin />} />
        <Route path="/admin/delete/:id" element={<DeleteAdmin />} />
        <Route path="/admin/category" element={<AdminCategory />} />

        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:productId" element={<Productdetails />} />
        <Route path="/Categories/:categoryId" element={<Categories />} />
        <Route path="/Categoriedeatails" element={<Categoriedeatails />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Empty" element={<Empty />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;