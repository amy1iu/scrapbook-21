import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { PROMPTS } from '../fake-data';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const HomeFeedScreen = props => {
  const renderSwipeableListItem = itemData => {
    return (
        <Swipeable
            renderLeftActions={LeftSwipeActions}
            renderRightActions={() => {
                props.navigation.navigate({
                  routeName: 'Cam',
                  params: {
                    categoryId: itemData.item.id
                  }
                });
              }}
            //onSwipeableRightOpen={swipeFromRightOpen}
            //onSwipeableLeftOpen={swipeFromLeftOpen}
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
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={PROMPTS}
      renderItem={renderSwipeableListItem}
      numColumns={1}
    />
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
