import { SWITCH_USER, ADD_IMAGE, CHANGE_PROMPT, GRAB_IMAGES } from './images-act';
import Photo from '../components/Photo';

const initialState = {
    currentUser: 1,
    currentPrompt: '',
    images: []
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GRAB_IMAGES:
            return {...state, images: action.images}
        case SWITCH_USER:
            return {...state, currentUser: action.userValue};
        case CHANGE_PROMPT: {
            return {...state, currentPrompt: action.newPrompt};
        }
        case ADD_IMAGE:
            const newPhoto = new Photo(
                action.id,
                action.curPrompt,
                action.image,
                action.curUser);
            return {...state, images: state.images.concat(newPhoto)};
        default:
            return state;
    } 
}

export default imagesReducer;