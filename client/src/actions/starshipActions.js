import {
    GET_STARSHIPS_DATABASE,
    GET_STARSHIPS,
    GET_STARSHIP,
    UPDATE_STARSHIP,
    LOADING_STARSHIPS,
} from './constants';
import axios from 'axios';

const getData = url => {
    return axios.get(url);
}

export const getStarships = filmUrl => dispatch => {
    dispatch(setLoadingStarships());
    axios
        .get(filmUrl)
        .then(response => {
            let starshipRequest = [];
            let starshipList = [];
            response.data.starships.forEach(url => {
                starshipRequest.push(getData(url));
            });
            axios.all(starshipRequest)
                .then(axios.spread((...args) => {
                    for (let i = 0; i < args.length; i++) {
                        starshipList.push(args[i].data);
                    }
                }))
                .then(res => dispatch({
                    type: GET_STARSHIPS,
                    payload: starshipList,
                }))
        })
        .catch(error => {
            console.log(error);
        })
};

export const getStarshipsFromDatabase = () => dispatch => {
    dispatch(setLoadingStarships());
    axios
        .get('/starships')
        .then(res => dispatch({
            type: GET_STARSHIPS_DATABASE,
            payload: res.data,
        }))
        .catch(function (error) {
            console.log(error);
        })
};

export const getStarship = (url) => dispatch => {
    dispatch(setLoadingStarships());
    axios
        .get(url)
        .then(res => dispatch({
            type: GET_STARSHIP,
            payload: res.data,
        }))
        .catch(function (error) {
            console.log(error);
        })
};

export const updateStarship = starship => dispatch => {
    dispatch(setLoadingStarships());
    axios
        .post('/starships', starship)
        .then(res => {
            dispatch({
                type: UPDATE_STARSHIP,
                payload: res.data,
            })
        })
        .catch(function (error) {
            console.log(error);
        })
};

export const setLoadingStarships = () => {
    return {
        type: LOADING_STARSHIPS,
    };
};