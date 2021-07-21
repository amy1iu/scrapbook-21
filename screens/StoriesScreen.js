import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';
import CameraPreview from '../components/CameraPreview';
//import { StoryContainer } from 'react-native-stories-view';

const StoriesScreen = () => {
    const currentUser = useSelector(state => state.imager.currentUser);
    const currentPrompt = useSelector(state => state.imager.currentPrompt);
    const allImages = useSelector(state => state.imager.images);

    const storyObjs = allImages.filter(imgObj => imgObj[2]===(currentPrompt) ); //still array of arrays && imgObj[1]!==(currentUser)
    const storyImages = storyObjs.map(obj => obj[0]);

    const photo = storyImages[0]; 
    console.log(photo);

    return ( //restyle maybe
        <View style={styles.container}>
            <View style={styles.previewContainer}>
                <ImageBackground source={{uri: photo}} style={styles.container}> 
                    <Text style={{fontSize:100, color:999999}}>stories screen</Text>
                </ImageBackground>
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
