import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Camera from 'expo-camera';

const CameraPreview = props => {
    return (
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            width: '100%',
            height: '100%'
          }}
        >
          <ImageBackground
            source={{uri: props.photo && props.photo.uri}}
            style={{
              flex: 1
            }}
          />
        </View>
    );
}

export default CameraPreview;