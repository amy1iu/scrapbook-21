import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Camera from 'expo-camera';

const CameraPreview = props => {
    return (
        <View style={styles.previewContainer}>
            <ImageBackground
                source={{uri: props.photo && props.photo.uri}}
                style={styles.container}
            >
                <View style={styles.previewBottomRow}>
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            onPress={props.retakePhoto}
                            style={styles.bottomButton}
                        >
                            <Text style={styles.bottomText}>
                            Re-take
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.savePhoto}
                            style={styles.bottomButton}
                        >
                            <Text style={styles.bottomText}>
                            Save Photo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>     
        </View>
    );
}

export const styles = StyleSheet.create({ //some of these are only for CameraScreen components
    container: {
        flex: 1,
    },
    previewContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
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
    previewBottomRow: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'flex-end'
    },
    bottomButton: {
        width: 130,
        height: 40,
        alignItems: 'center',
        borderRadius: 4
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
    bottomText: {
        color: '#fff',
        fontSize: 20
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraPreview;