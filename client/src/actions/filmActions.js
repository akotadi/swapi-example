import {
    GET_FILMS,
    LOADING_FILMS,
} from './constants';
import axios from 'axios';

export const getFilms = () => dispatch => {
    dispatch(setLoadingFilms());
    axios
        .get('https://swapi.co/api/films/')
        .then(res => dispatch({
            type: GET_FILMS,
            payload: res.data.results,
        }))
        .catch(function (error) {
            console.log(error);
        })
};

export const setLoadingFilms = () => {
    return {
        type: LOADING_FILMS,
    };
};