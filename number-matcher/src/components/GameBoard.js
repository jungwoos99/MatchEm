import { useSelector, useDispatch } from 'react-redux'
import { queueNumber, clearPair, checkForMatch, selectBox } from '../features/game/gameSlice'
import React from 'react'

export default function GameBoard() {
    
    const dispatch = useDispatch()
    const game = useSelector(state => state.game)

    React.useEffect(()=> {
        dispatch(checkForMatch())
    },[game.valuePair])

    const values = (game.numberBoxes)

    function selectValue(box) {
            dispatch(selectBox({id: box.id, value: box.value}))
            dispatch(queueNumber(box.value))
    }

    let boxes = values.map((box) => {
        return (
            <h3 
                key={box.id}
                className='number-box' 
                onClick={()=> selectValue(box)}
                id={box.id}
                style={box.selected ? {color: "black"} : {color: "white"}}
            >{box.value}</h3>
        )
    })

    return (
        <div className='game-board'>
            {boxes}
        </div>
    )
}