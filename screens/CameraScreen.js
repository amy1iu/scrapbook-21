import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview from '../components/CameraPreview';
import * as Permissions from 'expo-permissions';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicHandler = async () => {
        if (!this.camera) return;
        const photo = await this.camera.takePictureAsync();
        setPreviewVisible(true);
        setCapturedImage(photo);
    }

    const switchCameraFunc = () => {
        setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
    }

    return (
        <View style={styles.container}>
            {previewVisible && capturedImage ? (
                <CameraPreview photo= {capturedImage}/>
            ) : (
                <Camera style={styles.camera} 
                        type={type} 
                        ref={ref => {this.camera = ref;}}>
                    <View style={styles.bottomRow}>
                        <View style={styles.shutterPosition}>
                            <TouchableOpacity
                                onPress={takePicHandler}
                                style={styles.shutterButton}
                            />
                        </View>
                    </View>
                </Camera>
            )}
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    bottomRow: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    shutterPosition: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    shutterButton: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraScreen;

/* 
<View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={switchCameraFunc}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    
                </View> */