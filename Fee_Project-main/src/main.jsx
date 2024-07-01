  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Routes } from 'react-router-dom'
  import Layout from './Layout.jsx'
  import Home from './Components/Home/Home.jsx'
  import AboutUs from './Components/AboutUs/AboutUs.jsx'
  import Slider from './Components/Slider/Slider.jsx'
  import Footer from './Components/Footer/Footer.jsx'
  import { Auth0Provider } from '@auth0/auth0-react';
  import Contact from './Components/Courses/Contact/Contact.jsx'
  import Courses from './Components/Courses/Courses.jsx'
import Playlist from './Components/playlist/playlist.jsx'


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={
      
      <>
      
      <Layout/>
      <Slider/> 
   
      <Home/> 
      
      <Footer/>
      </>
      }/>
      <Route path='/Slider' element={<><Layout/><Slider/><Footer/></>}/>
      <Route path='/about' element={<><Layout/><AboutUs/><Footer/></>}/>
      <Route path='/Footer' element={<><Layout/><Footer/></>}/>
      <Route path='/Contact' element={<><Layout/><Contact/></>}/>
      <Route path='/Courses' element={<><Layout/><Courses/></>}/>
      <Route path='/html' element={<><Layout/><Playlist/></>}/>
      </>
    )
  )
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-t5rwyojrlhx2s66q.us.auth0.com"
    clientId="4RcmVpZJfmVz0zUx2XCMw9ZovreyCBXD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
      <RouterProvider router={router}/>
      </Auth0Provider>
    
  );