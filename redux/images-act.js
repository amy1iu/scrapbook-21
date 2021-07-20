export const SWITCH_USER = 'SWITCH_USER';

export const switchUser = (uValue) => {
    return { type: SWITCH_USER, userValue: uValue}
};