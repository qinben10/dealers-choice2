import React from 'react';
const Game = (props)=>{
    const {selectedGame} = props;
    return (
        <div>
            <div>
                <p>
                    Game Name : {selectedGame.name}
                </p>
                <p>
                    Genre: {selectedGame.genre}
                </p>
            </div>
        </div>
    )
}
export default Game