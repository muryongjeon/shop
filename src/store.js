import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
});

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increaseCount(state, id) {
            console.log(state);
            console.log(id);
            let item = state.find((x) => x.id === id.payload);
            item.count += 1;
        },
        order(state, item) {
            let product = state.find((x) => x.id === item.payload.id);
            if (product === undefined) {
                state.push({ id: item.payload.id, name: item.payload.title, count: 1 });
            } else {
                product.count += 1;
            }
        }
    }
});

export let { increaseCount, order } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
});
