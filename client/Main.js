import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Games from './components/games'
import SingleGame from './components/SingleGame'

export default class App extends Component {
    render(){
        return (
            <div id = 'main'>
            <Route exact path = '/' component = {Games}/>
            <Route path = '/games/:gameId' component = {SingleGame}/>
            </div>
        )
    }
}

