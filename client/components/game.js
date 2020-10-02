
import React from 'react'
import {Link} from 'react-router-dom'

const Game = (props) =>{
    const game = props.game
    return (
        <div>
            <Link to={`/games/${game.id}`}>
        <li>{game.name}</li>
            </Link>
        <h5>{game.genre}</h5>

        </div>
    )
}

export default Game