import React from "react"
import axios from "axios"
import CreateGame from './CreateGame'
import Game from './game'

export default class Games extends React.Component{
    constructor(){
        super();
        this.state = {
            games:[],
        }
        this.updateGames = this.updateGames.bind(this)
    }

  async componentDidMount() {
      const res = await axios.get('/api/games');
      const games = res.data;
      this.setState({ games });
  }
    updateGames(newGame){
        newGames =[...this.state.games, newGame]
        this.setState({
            games:newGames
        })
    }
    render(){
        return(
            <div>
            <div>Game List</div>
            <CreateGame updateGames = {this.updateGames}/>
            <div>
            {this.state.games.map(game =>{
                    return(<Game game ={game} key = {game.id}/>)
                } )}
            </div>
            </div>
        );

    }
}