import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet, ImageBackground
} from 'react-native';
import { PROMPTS } from '../fake-data';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { LeftSwipeActions } from '../SwipeableListItem';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { switchUser, changePrompt } from '../redux/images-act';

const HomeFeedScreen = props => {
  const dispatch = useDispatch();
  const renderSwipeableListItem = itemData => {
    const swipeOpenHandler = (screen, text) => {
      props.navigation.navigate(screen);
      dispatch(changePrompt(text));
    }
    return (
        <Swipeable
            renderLeftActions={LeftSwipeActions}
            renderRightActions= {LeftSwipeActions}
            onSwipeableRightWillOpen={() => swipeOpenHandler('Stories', itemData.item.text)}
            onSwipeableLeftOpen={() => swipeOpenHandler('Cam', itemData.item.text)}
        >
            <View
            style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: 'white',
            }}
            >
                <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
                    {itemData.item.text}
                </Text>
            </View>
      </Swipeable>
    );
  };

  return (
    <View>
      <ImageBackground source={{uri: "https://s.yimg.com/aah/craftersmarket/paper-by-the-sheet-scrapbook-2465-items-3.gif"}} style={{height:100}}>
      </ImageBackground>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={PROMPTS}
      renderItem={renderSwipeableListItem}
      numColumns={1}
      />
      <Picker
        selectedValue={useSelector(state => state.imager.currentUser)}
        onValueChange={(itemValue, itemIndex) =>
          dispatch(switchUser(itemValue))
        }>
        <Picker.Item label="User One" value={1} />
        <Picker.Item label="User Two" value={2} />
        <Picker.Item label="User Three" value={3} />
      </Picker>
    </View>
    
  );
};

HomeFeedScreen.navigationOptions = {
  headerTitle: 'Scrapbook',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default HomeFeedScreen;
