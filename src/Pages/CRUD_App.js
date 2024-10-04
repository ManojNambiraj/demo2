import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './UserList'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

function CRUD_App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CRUD_App
