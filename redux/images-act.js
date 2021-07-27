import Photo from '../components/Photo';

export const SWITCH_USER = 'SWITCH_USER';
export const ADD_IMAGE = 'ADD_IMAGE';
export const CHANGE_PROMPT = 'CHANGE_PROMPT';
export const GRAB_IMAGES = 'GRAB_IMAGES';

export const fetchImages = () => {
    return async dispatch => {
        const response = await fetch('https://scrapbook-ad78a-default-rtdb.firebaseio.com/photos.json');
        const resData = await response.json();
        
        const loadedImages = [];
        for (const key in resData) {
            loadedImages.push(
                new Photo(
                    key,
                    resData[key].prompt,
                    resData[key].image,
                    resData[key].user
                )
            );
        }
        console.log(loadedImages);
        dispatch({type: GRAB_IMAGES, 
                images: loadedImages});

    }
}

export const switchUser = (uValue) => {
    return { type: SWITCH_USER, userValue: uValue}
};

export const changePrompt = (text) => {
    return { type: CHANGE_PROMPT, newPrompt: text};
}

export const addImage = (image, user, prompt) => {
    return async dispatch => {
        const response = await fetch('https://scrapbook-ad78a-default-rtdb.firebaseio.com/photos.json', {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify({
                image,
                user,
                prompt
            })
        });
        const resData = await response.json();
        dispatch({type: ADD_IMAGE, 
                id: resData.name,
                image: image, 
                curUser: user, 
                curPrompt: prompt});
    };
};