import React, {Component} from 'react'
import axios from 'axios'

export default class CreateGame extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            genre:''
        }
        this.nameChange = this.nameChange.bind(this)
        this.genreChange = this.genreChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    
    nameChange(ev){
        this.setState({
            name: ev.target.value
        })
    }
    genreChange(ev){
        this.setState({
            genre: ev.target.value
        })
    }
    async submit(ev){
        const newGame = (await axios.post('/api/games',{name: this.state.name, genre:this.state.genre})).data
        this.props.updateGames(newGame)
        console.log(newGame)
    }

    render(){
        return (
            
            <form onSubmit = {this.submit}>
                <label htmlFor = 'name'>Game Name</label>
                <input name = 'name' type = 'text' value={this.state.name} onChange = {this.nameChange}/>
                <label htmlFor = 'genre'>Game Genre</label>
                <input name = 'genre' type = 'text' value={this.state.genre} onChange = {this.genreChange}/>
                <button type = 'submit'>Submit</button>
            </form>
        )
    }

}