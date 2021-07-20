export const SWITCH_USER = 'SWITCH_USER';
export const ADD_IMAGE = 'ADD_IMAGE';
export const CHANGE_PROMPT = 'CHANGE_PROMPT';

export const switchUser = (uValue) => {
    return { type: SWITCH_USER, userValue: uValue}
};

export const changePrompt = (text) => {
    return { type: CHANGE_PROMPT, newPrompt: text};
}

export const addImage = (image, user, prompt) => {
    return {type: ADD_IMAGE, image: image, curUser: user, curPrompt: prompt}
};