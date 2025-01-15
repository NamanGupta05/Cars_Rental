import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Login from '../components/UI/Login'
import Register from '../components/UI/Register'
import Privacy from '../components/UI/Privacy'
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} /> {/* Home page mapped to /home */}
      <Route path="/about" element={<About />} />
      <Route path="/CarListing" element={<CarListing />} />
      <Route path="/car-details/:slug" element={<CarDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details/:slug" element={<BlogDetails />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Routers