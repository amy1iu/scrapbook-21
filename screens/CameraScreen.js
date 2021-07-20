import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview, { styles } from '../components/CameraPreview';
import * as Permissions from 'expo-permissions';
import { useSelector, useDispatch } from 'react-redux';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [flashMode, setFlashMode] = useState('off')
    const dispatch = useDispatch();
    
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
        const photo = await this.camera.takePictureAsync({
            base64: true,
            quality: 0.5
        });
        //console.log(photo);
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

    const changeFlashMode = () => {
        if (flashMode === 'on') {
            setFlashMode('off');
        } else if (flashMode === 'off') {
            setFlashMode('on');
        } else {
            setFlashMode('auto');
        }
    }

    const retakePhoto = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
    }

    const savePhoto = () => {
        const currentUser = useSelector(state => state.imager.currentUser);
        console.log(capturedImage);
    }

    return (
        <View style={styles.container}>
            {previewVisible && capturedImage ? (
                <CameraPreview photo= {capturedImage} retakePhoto={retakePhoto} savePhoto={savePhoto}/>
            ) : (
                <Camera style={styles.camera} 
                        type={type} 
                        flashMode={flashMode}
                        ref={ref => {this.camera = ref;}}>
                    <View
                    style={{
                        position: 'absolute',
                        left: '5%',
                        top: '10%',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                    >
                        <TouchableOpacity
                            onPress={changeFlashMode}
                            style={{
                            backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                            borderRadius: '50%',
                            height: 25,
                            width: 25
                            }}
                        >
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >
                            ⚡️
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={switchCameraFunc}
                            style={{
                            marginTop: 20,
                            borderRadius: '50%',
                            height: 25,
                            width: 25
                            }}
                        >
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >
                            {type === 'front' ? '🤳' : '📷'}
                            </Text>
                        </TouchableOpacity>
                    </View>
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

export default CameraScreen;

/* 
<View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={switchCameraFunc}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    
                </View> */