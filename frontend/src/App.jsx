
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Toaster position='top-right'/>
        <Routes>
          <Route path='/' element={<UserLayout />}>
          {/* User layout */}
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
