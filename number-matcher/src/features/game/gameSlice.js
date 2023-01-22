import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberBoxes: [
        {id: 1, value: 1, matched: false, selected: false}, {id: 2, value: 1, matched: false, selected: false},
        {id: 3, value: 2, matched: false, selected: false}, {id: 4, value: 2, matched: false, selected: false}, 
        {id: 5, value: 3, matched: false, selected: false}, {id: 6, value: 3, matched: false, selected: false}
    ],
    isComplete: false,
    valuePair: [],
    testValues: [{id: 1, value: 1}, {id: 2, value: 2}],
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
        queueNumber: (state, action) => {
            if(state.valuePair.length > 0) {
                if(state.valuePair[0].id !== action.payload.id) {
                    state.valuePair = [
                        ...state.valuePair,
                        action.payload
                    ]
                }
            }
            else {
                state.valuePair = [
                    ...state.valuePair,
                    action.payload
                ]
            }
        },
        checkForMatch: (state) => {
            const box1 = state.valuePair[0]
            const box2 = state.valuePair[1]

            if(state.valuePair.length=== 2) {
                if(box1.value === box2.value) {
                    state.numberBoxes.forEach((box) => {
                        if(box.id === box1.id || box.id === box2.id) {
                            box.matched = true
                        }
                    })
                } else {
                    state.numberBoxes.forEach((box) => {
                        if(box.id === box1.id || box.id === box2.id) {
                            box.selected = false
                        }
                    })
                }
                state.valuePair=[]
            }
        },
        selectBox: (state, action) => {
            queueNumber(action.payload.value)
            state.numberBoxes.forEach((box) => {
                if(box.id === action.payload.id) {
                    box.selected = !box.selected
                }
            })
        },
        checkForFinish: (state) => {
            state.numberBoxes.forEach((box) => {
                if(box.matched===true) {
                    state.isComplete = true
                } else {
                    state.isComplete = false
                }
            })
        }, 
    }
})

export default gameSlice.reducer

export const { queueNumber, clearPair, checkForMatch, selectBox, checkForFinish, log } = gameSlice.actions