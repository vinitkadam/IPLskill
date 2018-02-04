import { TESTING } from '../actions/types';

const INITIAL_STATE = {
    testing: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TESTING:
            return { ...state, testing: action.payload };
        default:
            return state;
    }
};