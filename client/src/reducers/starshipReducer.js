import {
    GET_STARSHIPS,
    GET_STARSHIP,
    UPDATE_STARSHIP,
    LOADING_STARSHIPS,
    GET_STARSHIPS_DATABASE,
} from './../actions/constants';

const initialState = {
    starships: [],
    starshipsDatabase: [],
    loaded: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STARSHIPS:
            return {
                ...state,
                starships: action.payload,
                loading: false,
            };

        case GET_STARSHIP:
            return {
                ...state,
                starships: action.payload,
                loading: false,
            };

        case GET_STARSHIPS_DATABASE:
            return {
                ...state,
                starshipsDatabase: action.payload,
                loading: false,
            };

        case UPDATE_STARSHIP:
            return {
                ...state,
                starships: action.payload,
                loading: false,
            };

        case LOADING_STARSHIPS:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}