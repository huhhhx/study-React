import React, { Component } from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
 
  render() {
    return (
      <div>
       <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>Rouer Demo</h2>
          </div>
        </div>
       </div>
       <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
              {/* <a href="" className="list-group-item">About</a>
              <a href="" className="list-group-item active">Home</a> */}
              <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink>
              

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由  开启精准匹配 重定向*/}
              <Route   path = "/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Redirect to="/about"></Redirect>
            </div>
          </div>
        </div>
       </div>
      </div>
    )
  }
}