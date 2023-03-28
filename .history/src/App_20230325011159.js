import React from 'react'
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './screens/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/'
export default function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="login" element={<Login/>}/>
      </Routes>
    </div>
    </Router>
  )
}
