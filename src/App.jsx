import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/posts" element={<h1>Posts</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </>
  )
}

export default App
