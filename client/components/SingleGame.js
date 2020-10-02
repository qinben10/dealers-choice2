import React, {Component} from 'react'
import Game from './game'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleGame extends Component{
    constructor(){
        super()
        this.state = {
            game:{}
        }
    }
    async componentDidMount(){
        const res = await axios.get(`/api/games/${this.props.match.params.gameId}`)
        this.setState({game: res.data})
    }

    render(){
        return(
            <div>
                <Game game={this.state.game}/>
                <Link to = '/'>Back</Link>
            </div>
        )
    }
}