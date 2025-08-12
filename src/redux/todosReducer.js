import { createSlice } from "@reduxjs/toolkit";

const todosReducer = createSlice({
    name: 'todos',
    initialState: JSON.parse(localStorage.getItem("todos"))||[],
    reducers: {
        setTodo(state, action) {
            return action.payload
        },
        addTodo(state, action) {
            state.push({
                id: Date.now(),
                title: action.payload,
                completed: false
            })
        },
        deleteTodo(state, action) {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo(state, action) {
            const { id, title, completed } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                if (title !== undefined) todo.title = title;
                if (completed !== undefined) todo.completed = completed;
            }
        }
    }
})

export const { setTodo, addTodo, deleteTodo, updateTodo } = todosReducer.actions;
export default todosReducer.reducer;