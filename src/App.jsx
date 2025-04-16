
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
