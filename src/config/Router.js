import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../Login'
import Dashboard from '../Dashboard'

const Router = () =>(
    
    <Switch>
        <Route exact path ='/' component={Login}/>
        <Route exact path ='/dashboard' component={Dashboard}/>
    </Switch>
) 

export default Router;