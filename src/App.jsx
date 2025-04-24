
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Programs from './Pages/Programs'
import Contact from './Pages/Contact'
import Testimonies from './Pages/Testimonies'
import Donate from './Pages/Donate'
import Donationform from './Pages/Donate/Donationform'
import Eyecamp from './Pages/Home/Eyecamp'
import StudentCounciling from './Pages/Home/StudentCounciling'
import Ias from './Pages/Home/Ias'
import Educationalmeet from './Pages/Home/Educationalmeet'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/testimonies' element={<Testimonies/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/donation-form' element={<Donationform/>}/>
        <Route path='/eye-camp' element={<Eyecamp/>}/>
        <Route path='/student-council' element={<StudentCounciling/>}/>
        <Route path='/ias' element={<Ias/>}/>
        <Route path='/educational-meet' element={<Educationalmeet/>}/>
      </Route>

    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
