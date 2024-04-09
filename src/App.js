import React, { Component } from 'react'
import NavBar from './Component/navBar'
import NewsComponent from './Component/newsComponent'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0,
  }

  setProgress = (pro)=>{
    this.setState({progress: pro})
  }
  apiKey = process.env.REACT_APP_API_KEY
  render() {
    return (
      <>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path='/' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize="6" country="in" category="general"/>}/>
        <Route exact path='/entertainment' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize="6" country="in" category="entertainment"/>}/>
        <Route exact path='/business' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize="6" country="in" category="business"/>}/>
        <Route exact path='/health' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize="6" country="in" category="health"/>} />
        <Route exact path='/science' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize="6" country="in" category="science"/>} />
        <Route exact path='/sports' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize="6" country="in" category="sports"/>}/>
        <Route exact path='/technology' element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize="6" country="in" category="technology"/>}/>
        
        </Routes>
        </Router>
      </>
    )
  }
}
