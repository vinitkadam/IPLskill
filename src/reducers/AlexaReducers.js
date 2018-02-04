import { TESTING } from '../actions/types';

const INITIAL_STATE = {
    test: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TESTING:
            return { ...state, test: action.payload };
        default:
            return state;
    }
};
