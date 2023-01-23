import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBox, queueNumber } from '../features/game/gameSlice'

export default function NumberBox() {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()
    const values = game.numberBoxes
    const boxes = values.map((box) => {
        return (
            <h1
                className={box.selected ? 'number-box-selected' : 'number-box'}
                onClick={()=> selectValue(box)}
                id={box.id}
                style={box.matched ? {backgroundColor:"lightskyblue", pointerEvents:"none", color: 'white', fontSize:"xx-large"} : {backgroundColor: "white"}}
            >{box.value}</h1>
        )
    })

    function selectValue(box) {
        dispatch(selectBox({id: box.id, value: box.value}))
        dispatch(queueNumber({value: box.value, id: box.id}))
    }

    return (
        <div className='box-area'>
            {boxes}
        </div>
    )
}