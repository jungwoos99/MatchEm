import { useSelector, useDispatch } from 'react-redux'
import { queueNumber, checkForMatch, selectBox, checkForFinish } from '../features/game/gameSlice'
import React from 'react'

export default function GameBoard() {
    
    const dispatch = useDispatch()
    const game = useSelector(state => state.game)
    const values = (game.numberBoxes)
    let boxes = values.map((box) => {
        return (
            <h3 
                key={box.id}
                className={box.selected ? 'number-box-selected' : 'number-box'}
                onClick={()=> selectValue(box)}
                id={box.id}
                style={box.matched ? {backgroundColor:"lightskyblue", pointerEvents:"none"} : {backgroundColor: "white"}}
            >{box.value}</h3>
        )
    })

    React.useEffect(()=> {
        dispatch(checkForMatch())
    },[game.valuePair])

    React.useEffect(()=> {
        dispatch(checkForFinish())
    }, [game.numberBoxes])

    function selectValue(box) {
            dispatch(selectBox({id: box.id, value: box.value}))
            dispatch(queueNumber({value: box.value, id: box.id}))
    }
    
    return (
        <div className='game-board'>
            {game.isComplete && <h1>Congratulations!</h1>}
            <div className='box-area'>
                {boxes}
            </div>
        </div>
    )
}