import { SWITCH_USER, ADD_IMAGE, CHANGE_PROMPT } from './images-act';

const initialState = {
    currentUser: 1,
    currentPrompt: '',
    images: []
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_USER:
            return {...state, currentUser: action.userValue};
        case CHANGE_PROMPT: {
            return {...state, currentPrompt: action.newPrompt};
        }
        case ADD_IMAGE:
            return {...state, images: state.images.concat([action.image, action.curUser, action.curPrompt])};
        default:
            return state;
    } 
}

export default imagesReducer;