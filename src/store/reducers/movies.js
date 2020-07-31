import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
} from '../actionTypes';

let initialstate = {
    loading: false,
    error: null,
    pageTitle: 'Movies',
    movies: []
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
        case GET_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: null
            }

        default:
            return state
    }
}