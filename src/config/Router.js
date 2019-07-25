import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../Login'
import Dashboard from '../Dashboard'
import Details from '../Details'

const Router = () =>(

    <Switch>
        <Route exact path ='/' component={Login}/>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/add' component={Details}/>
    </Switch>
)

export default Router;