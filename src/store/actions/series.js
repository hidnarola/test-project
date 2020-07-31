import {
    GET_SERIES_REQUEST,
    GET_SERIES_SUCCESS,
    GET_SERIES_ERROR
} from '../actionTypes';
import { MockData } from '../../constant/mockdata';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import _slice from 'lodash/slice';

const PROGRAM_TYPE = 'series';

export const getWebSeries = () => {
    return (dispatch) => {
        dispatch({ type: GET_SERIES_REQUEST });
        const result = _sortBy(
            _filter(MockData.entries,
                function (o) {
                    return o.releaseYear >= 2010 && o.programType == PROGRAM_TYPE
                }
            ), function (o) {
                return o.title;
            }
        );
        setTimeout(() => {
            dispatch({
                type: GET_SERIES_SUCCESS,
                payload: _slice(result, 0, 21)
            })
        }, 3000)
    }
}