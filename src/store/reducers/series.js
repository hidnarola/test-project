import {
    GET_SERIES_REQUEST,
    GET_SERIES_SUCCESS,
    GET_SERIES_ERROR
} from '../actionTypes';
// import _ from 'lodash';

let initialstate = {
    loading: false,
    error: null,
    webSeries: []
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case GET_SERIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_SERIES_SUCCESS:
            return {
                ...state,
                webSeries: action.payload,
                loading: false,
            }
        case GET_SERIES_ERROR:
            return {
                ...state,
                loading: false,
                error: null
            }

        default:
            return state
    }
}