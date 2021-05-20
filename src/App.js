import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      gameOver: false
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({ treasureLocation: treasure, bombLocation: bomb })
  }


  handleGamePlay = (index) => {
    const { board, treasureLocation, bombLocation, gameOver } = this.state
    if(index === treasureLocation && gameOver === false){
      board[index] = "💎"
      this.setState({ board: board, gameOver: true })
    } else if(index === bombLocation && gameOver === false){
      board[index] = "💣"
      this.setState({ board: board, gameOver: true })
    } else if(gameOver === false) {
      board[index] = "🌴"
      this.setState({ board: board })
    }
  }

  render(){
    console.log("treasure:", this.state.treasureLocation)
    console.log("bomb:", this.state.bombLocation)
    console.log("gameOver", this.state.gameOver)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameBoard">
          { this.state.board.map((value, index) => {
            return (
              <Square
                value={ value }
                index={ index }
                key={ index }
                handleGamePlay={ this.handleGamePlay }
              />
            )
          })}
        </div>
        { this.state.gameOver && <div>Game Over!</div> }
      </>
    )
  }
}
export default App
