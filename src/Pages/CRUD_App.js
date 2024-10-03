import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './UserList'
import CreateUser from './CreateUser'

function CRUD_App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/create' element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CRUD_App
