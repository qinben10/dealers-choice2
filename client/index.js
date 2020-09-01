import React from "react"
import ReactDOM from "react-dom"
import Game from "./components/selectedGame"
import axios from "axios"

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            games:[],
            selectedGame:{}
        }
        this.selectGame = this.selectGame.bind(this);
    }

  async componentDidMount() {
      const res = await axios.get('/api/games');
      const games = res.data;
      this.setState({ games });
  }

  async selectGame(gameId) {

      const res = await axios.get(`/api/games/${gameId}`);
      const selectedGame = res.data;
      this.setState({ selectedGame });

  }
    render(){
        return(
            <div>
            <div>Game List</div>
            <div>
            {this.state.selectedGame.id ? (
            <Game selectedGame={this.state.selectedGame} />
          ) : (this.state.games.map(game =>{
                return(
                    <li onClick={() => this.selectGame(game.id)}>
                        {game.name}</li>
                )
            }))}
            </div>
            </div>
        );

    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('app')
  )