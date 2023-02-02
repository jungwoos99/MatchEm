import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberBoxes: [
        {id: 1, value: 1, matched: false, selected: false}, {id: 2, value: 1, matched: false, selected: false},
        {id: 3, value: 2, matched: false, selected: false}, {id: 4, value: 2, matched: false, selected: false}, 
        {id: 5, value: 3, matched: false, selected: false}, {id: 6, value: 3, matched: false, selected: false}
    ],
    numberBoxesDefault: [
        {id: 1, value: 1, matched: false, selected: false}, {id: 2, value: 1, matched: false, selected: false},
        {id: 3, value: 2, matched: false, selected: false}, {id: 4, value: 2, matched: false, selected: false}, 
        {id: 5, value: 3, matched: false, selected: false}, {id: 6, value: 3, matched: false, selected: false}
    ],
    isFinished: false,
    score: 0,
    valuePair: [],
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
                            state.score += 1
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
            state.score === state.numberBoxes.length ? state.isFinished = true : state.isFinished = false
        },
        randomizeBoxes: (state) => {
            let currentIndex = state.numberBoxes.length,  randomIndex;
      
            // While there remain elements to shuffle.
            while (currentIndex !== 0) {
      
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [state.numberBoxes[currentIndex], state.numberBoxes[randomIndex]] = [
                    state.numberBoxes[randomIndex], state.numberBoxes[currentIndex]];
            }
            state.numberBoxes.forEach((box) => {
                box.selected = false
                box.matched = false
            })
            state.valuePair = []
            state.isComplete = false
            state.score = 0
        }, 
        resetGame: (state) => {
            state.numberBoxes = state.numberBoxesDefault
            state.valuePair = []
            state.isComplete = false
            state.score = 0
        },
        increaseDifficulty: (state) => {
            const lastId = state.numberBoxes.length
            const lastValue = state.numberBoxes.length / 2
            state.numberBoxes.forEach((box) => {
                box.matched = false
                box.selected = false
            })
            state.numberBoxes.push(
                {id: lastId + 1, value: lastValue + 1, matched: false, selected: false},
                {id: lastId + 2, value: lastValue + 1, matched: false, selected: false}
            )
            state.score = 0
        },
        getNewBoard: (state) => {
            state.numberBoxes.forEach((box) => {
                box.matched = false
                box.selected = false
            })
            state.score= 0
            state.isFinished=false
            state.valuePair=[]
        }, 
        revealValues: (state) => {
            state.numberBoxes.forEach((box)=> {
                if (!box.matched) {
                    box.selected = true
                }
            })
        },
        hideValues: (state) => {
            state.numberBoxes.forEach((box) => {
                if(!box.matched) {
                    box.selected = false
                }
            })
        }
    }
})

export default gameSlice.reducer

export const { queueNumber, clearPair, checkForMatch, selectBox, checkForFinish, randomizeBoxes, resetGame, increaseDifficulty, getNewBoard, revealValues, hideValues } = gameSlice.actions