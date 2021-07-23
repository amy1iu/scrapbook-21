import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent} from 'react-native';
import { useSelector } from 'react-redux';
//import { ProgressBar } from 'react-native-stories-view';

const StoriesScreen = props => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const currentUser = useSelector(state => state.imager.currentUser);
    const currentPrompt = useSelector(state => state.imager.currentPrompt);
    const allImages = useSelector(state => state.imager.images);
    const photo = null;

    const storyObjs = allImages.filter(imgObj => imgObj[2]===(currentPrompt) ); //still array of arrays && imgObj[1]!==(currentUser)
    const storyImages = storyObjs.map(obj => obj[0]);

    const tapHandler = () => {
        if (storyObjs.length <= 0) {
            return(
                <Text>No Stories Yet!</Text>
            );
        }
        else if (photoIndex < storyObjs.length-1) {
            setPhotoIndex(photoIndex+1);
        }
        else {
            props.navigation.navigate('Home');
        }
    }
    
    function check(index) {
        if (storyObjs.length <= 0) {
            return;
        }
        else {
            return storyObjs[photoIndex][index];
        }
    }

    //const photo = storyObjs[photoIndex][0]; 
    //const photographer = storyObjs[photoIndex][1];
    //console.log(photo);

    return ( //restyle maybe
        <View style={styles.container}>
            <View style={styles.previewContainer}>
                <TouchableWithoutFeedback onPress={tapHandler}>
                <ImageBackground source={{uri: check(0)}} style={styles.container}> 
                    <Text style={{fontSize:50, color:'white'}}> {check(1)} </Text>
                </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        </View> 
        
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
    },
    previewContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    }
});

export default StoriesScreen;
