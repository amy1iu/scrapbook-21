import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';
import { fetchImages } from '../redux/images-act';
//import { TabView } from 'react-native-tab-view';

const ProfileScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImages());
    },[dispatch])

    const [photoIndex, setPhotoIndex] = useState(0);
    const currentUser = useSelector(state => state.imager.currentUser);
    const allImages = useSelector(state => state.imager.images);
    const profObjs = allImages.filter(imgObj => imgObj.user===(currentUser) );
    //const profImages = profObjs.map(obj => obj[0]);
    //console.log(profImages);
    const renderContactHeader = () => {  
        return (
            <View style={styles.headerContainer}>
                <View style={styles.userRow}>
                    <Image
                        style={styles.userImage}
                        source={require('../assets/barney.jpeg')}
                    />
                    <View style={styles.userNameRow}>
                        <Text style={styles.userNameText}>{"User " + currentUser}</Text>
                    </View>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>{"I am purple"}</Text>
                    </View>
                </View>
            </View>
        );
    }  
    
    const tapHandler = () => {
        if (profObjs.length <= 0) {
            return(
            <View>
                <Text>Nothing here yet!</Text>
            </View>);
        }
        else if (photoIndex < profObjs.length-1) {
            setPhotoIndex(photoIndex+1);
        }
        else {
            setPhotoIndex(0);
        }
    }
    //const photo = profImages(photoIndex);
    function check() {
        if (profObjs.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={{flexDirection: 'column', height:1000}}>
                <View style={styles.cardContainer}>                   
                    {renderContactHeader()}
                </View> 
                <View style={{flex: 2}}>
                    {check() ? (
                        <TouchableWithoutFeedback onPress={tapHandler}>
                            <ImageBackground source={{uri: profObjs[photoIndex].imageBase}} style={styles.container}>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>{profObjs[photoIndex].prompt}</Text>
                            </ImageBackground> 
                        </TouchableWithoutFeedback>
                    ) : (
                        <View>
                            <Text>Nothing here yet!</Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
      );
}
//{profImages.map(image => <Image key={uuid.v4()} source={{uri: image}}/>)}
const styles = StyleSheet.create({
    cardContainer: {
      height: 250,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      marginBottom: 10,
      marginTop: 45,
    },
    indicatorTab: {
      backgroundColor: 'transparent',
    },
    scroll: {
      backgroundColor: '#FFF',
    },
    sceneContainer: {
      marginTop: 10,
    },
    socialIcon: {
      marginLeft: 14,
      marginRight: 14,
    },
    socialRow: {
      flexDirection: 'row',
    },
    tabBar: {
      backgroundColor: '#EEE',
    },
    tabContainer: {
      flex: 1,
      marginBottom: 12,
    },
    tabLabelNumber: {
      color: 'gray',
      fontSize: 12.5,
      textAlign: 'center',
    },
    tabLabelText: {
      color: 'black',
      fontSize: 22.5,
      fontWeight: '600',
      textAlign: 'center',
    },
    userBioRow: {
      marginLeft: 40,
      marginRight: 40,
    },
    userBioText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
    },
    userImage: {
      borderRadius: 60,
      height: 120,
      marginBottom: 10,
      width: 120,
    },
    userNameRow: {
      marginBottom: 10,
    },
    userNameText: {
      color: '#5B5A5A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 12,
    },
  });

export default ProfileScreen;