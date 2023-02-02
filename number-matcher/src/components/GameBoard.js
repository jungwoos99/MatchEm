import { checkForMatch, checkForFinish } from '../features/game/gameSlice'
import React from 'react'
import NumberBox from './NumberBox'
import { useDispatch, useSelector } from 'react-redux'
import GameControls from './GameControls'

export default function GameBoard() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    React.useEffect(()=> {
        dispatch(checkForMatch())
        // eslint-disable-next-line
    },[])

    React.useEffect(()=> {
        dispatch(checkForFinish())
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className='game-board'>
            {game.isFinished && <h1>Success!</h1>}
            <NumberBox/>
            <GameControls/>
        </div>
    )
}