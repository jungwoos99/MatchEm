import { useSelector, useDispatch } from 'react-redux'
import { checkForMatch, checkForFinish, randomizeBoxes, resetGame, increaseDifficulty, getNewBoard } from '../features/game/gameSlice'
import React from 'react'
import NumberBox from './NumberBox'

export default function GameBoard() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    React.useEffect(()=> {
        dispatch(checkForMatch())
    },[game.valuePair])

    React.useEffect(()=> {
        dispatch(checkForFinish())
    }, [game.numberBoxes])

    function raiseDifficulty() {
        dispatch(increaseDifficulty())
        dispatch(randomizeBoxes())
    }

    function newGame() {
        dispatch(resetGame())
        dispatch(randomizeBoxes())
    }

    function newBoard() {
        dispatch(getNewBoard())
        dispatch(randomizeBoxes())
    }

    console.log(game.numberBoxes.length)
    
    return (
        <div className='game-board'>
            {game.isFinished && <h1>Success!</h1>}
            <NumberBox/>
            <div className='game-buttons'>
                <h4 onClick={()=>newBoard()} className='new-game-button'>New Board</h4>
                {game.numberBoxes.length < 18 && <h4 onClick={()=>raiseDifficulty()} className='difficulty-button'>Increase Difficulty</h4>}
                <h3 onClick={()=>newGame()} className='reset-button'>Reset</h3>
            </div>
        </div>
    )
}