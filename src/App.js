import React, {useState} from 'react'
import NavBar from './Component/navBar'
import NewsComponent from './Component/newsComponent'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App () {

  const [progress, setProgress] = useState(0)
   
  const apiKey = "754bb668e332471984841ae559206acc"
    return (
      <>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path='/' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="general" pageSize="6" country="in" category="general"/>}/>
        <Route exact path='/entertainment' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize="6" country="in" category="entertainment"/>}/>
        <Route exact path='/business' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="business" pageSize="6" country="in" category="business"/>}/>
        <Route exact path='/health' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="health" pageSize="6" country="in" category="health"/>} />
        <Route exact path='/science' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="science" pageSize="6" country="in" category="science"/>} />
        <Route exact path='/sports' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="sports" pageSize="6" country="in" category="sports"/>}/>
        <Route exact path='/technology' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="technology" pageSize="6" country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </>
    )
  
}
