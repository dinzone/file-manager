import { configureStore } from '@reduxjs/toolkit'

let store = {
    fileList:[],
};

function initReducer(state = store, action){
    return state;
}

export default configureStore({reducer:initReducer});