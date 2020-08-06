import React, { Component } from 'react'

import { Switch, Route, Redirect, NavLink } from "react-router-dom"

// 二级路由组件引入
import Home from "../Home/Home"
import Classify from "../Classify/Classify"
import Shopping from "../Shopping/Shopping"
import Mine from "../Mine/Mine"

export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* 二级路由出口 */}
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/classify" component={Classify}></Route>
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/mine" component={Mine}></Route>

                    <Redirect to="/index/home"></Redirect>
                </Switch>
            </div>
        )
    }
}
