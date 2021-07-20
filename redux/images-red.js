import { SWITCH_USER } from './images-act';

const initialState = {
    currentUser: 1,
    images: []
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_USER:
            return {...state, currentUser: action.userValue};
        default:
            return state;
    } 
}

export default imagesReducer;