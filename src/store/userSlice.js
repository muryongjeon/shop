import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user',
    initialState: { name: 'Jeon', age: 34 },
    reducers: {
        changeName(state) {
            state.name = 'Park';
        },
        increaseAge(state, action) {
            state.age += action.payload;
        }
    }
});
export let { changeName, increaseAge } = user.actions;
export default user;
