import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import FeedPage from './Pages/FeedPage'

const App = () => {
  return (
    
    <div>
    <Routes>
    <Route path='/' element={<CreatePost/>} />
    <Route path='/feed' element={<FeedPage/>} />
    </Routes>
    </div>
  )
}

export default App