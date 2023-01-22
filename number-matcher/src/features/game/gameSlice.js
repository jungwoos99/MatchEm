import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberBoxes: [
        {id: 1, value: 1, matched: false, selected: false}, {id: 2, value: 1, matched: false, selected: false},
        {id: 3, value: 2, matched: false, selected: false}, {id: 4, value: 2, matched: false, selected: false}, 
        {id: 5, value: 3, matched: false, selected: false}, {id: 6, value: 3, matched: false, selected: false}
    ],
    isComplete: false,
    valuePair: [],
    testValues: [{id: 1, value: 1}, {id: 2, value: 2}]
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
        queueNumber: (state, action) => {
            state.valuePair = [
                ...state.valuePair,
                action.payload
            ]
            checkForMatch()
        }, clearPair: (state) => {
            state.valuePair = []
        },
        checkForMatch: (state) => {
            if(state.valuePair.length=== 2) console.log(state.valuePair[0] === state.valuePair[1])
        },
        selectBox: (state, action) => {
            queueNumber(action.payload.value)
            state.numberBoxes.forEach((box) => {
                if(box.id === action.payload.id) {
                    box.selected = !box.selected
                } else {
                    return box
                } 
            })
        }
    }
})

export default gameSlice.reducer

export const { queueNumber, clearPair, checkForMatch, selectBox } = gameSlice.actions