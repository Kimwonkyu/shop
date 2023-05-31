import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        increase(state, action){
            state.age += action.payload
        }
    }
})

export const {changeName, increase} = user.actions

let stock = createSlice({
    name: 'stock',
    initialState : [10,11,12]
})


let stockData = createSlice({
    name: 'stockData',
    initialState:
    [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers : {
        increaseCount(state, action){
            const {id} = action.payload;
            const stockItem = state.find(item => item.id === id);
            if(stockItem){
                stockItem.count += 1;
            }
        },
        addProduct(state, action){
            state.push(action.payload);
        }
    }
})

export const {increaseCount,addProduct} = stockData.actions

export default configureStore({
    reducer: {
        user:user.reducer,
        stock:stock.reducer,
        stockData:stockData.reducer
    }
})