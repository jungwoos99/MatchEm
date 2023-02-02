import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {randomizeBoxes, resetGame, increaseDifficulty, getNewBoard, revealValues, hideValues} from '../features/game/gameSlice'

export default function GameControls() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    function raiseDifficulty() {
        dispatch(increaseDifficulty())
        dispatch(randomizeBoxes())
    }

    function reset() {
        dispatch(resetGame())
        dispatch(randomizeBoxes())
    }

    function newBoard() {
        dispatch(getNewBoard())
        dispatch(randomizeBoxes())
    }

    function flashValues() {
        dispatch(revealValues())
        setTimeout(
            () => dispatch(hideValues())
            ,500
        )
    }

    return (
        <div className='game-buttons'>
            <h4 onClick={()=>newBoard()} className='new-game-button'>New Board</h4>
            {game.numberBoxes.length < 18 && <h4 onClick={()=>raiseDifficulty()} className='difficulty-button'>Increase Difficulty</h4>}
            <h4 onClick={()=>reset()} className='reset-button'>Reset Difficulty</h4>
            {!game.isFinished && <h4 className='hint-button' onClick={()=>flashValues()}>Hint</h4>}
        </div> 
    )
}