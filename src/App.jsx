import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'
//import BlogCard from './components/BlogCard'
import Detail from './components/Detail'
import EditBlog from './components/EditBlog'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/edit/:id' element={<EditBlog/>} />

        <Route path='/create' element={<CreateBlog/>} />

      </Routes>
    </div>
  )
}

export default App

//https://rizes-organization.gitbook.io/contactapi/?fbclid=IwAR0E9dQZ9SmEQ-gY37Doa9z3wbBJ4FhWG5AxT3uIWCz6eeKRMjTnb2iNSX4
