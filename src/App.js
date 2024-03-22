import React, { Component } from 'react'
import NavBar from './Component/navBar'
import NewsComponent from './Component/newsComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
        <NavBar/>
        <Routes>
        <Route exact path='/' element={<NewsComponent key="general" pageSize="5" country="in" category="general"/>}/>
        <Route exact path='/entertainment' element={<NewsComponent key="entertainment" pageSize="5" country="in" category="entertainment"/>}/>
        <Route exact path='/business' element={<NewsComponent key="business" pageSize="5" country="in" category="business"/>}/>
        <Route exact path='/health' element={<NewsComponent key="health" pageSize="5" country="in" category="health"/>} />
        <Route exact path='/science' element={<NewsComponent key="science" pageSize="5" country="in" category="science"/>} />
        <Route exact path='/sports' element={<NewsComponent key="sports" pageSize="5" country="in" category="sports"/>}/>
        <Route exact path='/technology' element={<NewsComponent key="technology" pageSize="5" country="in" category="technology"/>}/>
        
        </Routes>
        </Router>
      </>
    )
  }
}