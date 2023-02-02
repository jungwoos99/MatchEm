import { useSelector, useDispatch } from 'react-redux'
import { checkForMatch, checkForFinish, randomizeBoxes, resetGame, increaseDifficulty, getNewBoard, revealValues, hideValues } from '../features/game/gameSlice'
import React from 'react'
import NumberBox from './NumberBox'

export default function GameBoard() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    React.useEffect(()=> {
        dispatch(checkForMatch())
        // eslint-disable-next-line
    },[game.valuePair])

    React.useEffect(()=> {
        dispatch(checkForFinish())
        // eslint-disable-next-line
    }, [game.numberBoxes])

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
        <div className='game-board'>
            {game.isFinished && <h1>Success!</h1>}
            <NumberBox/>
            <div className='game-buttons'>
                <h4 onClick={()=>newBoard()} className='new-game-button'>New Board</h4>
                {game.numberBoxes.length < 18 && <h4 onClick={()=>raiseDifficulty()} className='difficulty-button'>Increase Difficulty</h4>}
                <h4 onClick={()=>reset()} className='reset-button'>Reset Difficulty</h4>
                {!game.isFinished && <h4 className='hint-button' onClick={()=>flashValues()}>Hint</h4>}
            </div> 
        </div>
    )
}