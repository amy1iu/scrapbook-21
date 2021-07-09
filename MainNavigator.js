import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeFeedScreen from './screens/HomeFeedScreen';
import CameraScreen from './screens/CameraScreen';
import StoriesScreen from './screens/StoriesScreen';

const MyStack = createStackNavigator();

const MainNavigator = props => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen 
          name="Home" 
          component={HomeFeedScreen}
        />
        <MyStack.Screen 
          name="Cam" 
          component={CameraScreen}
        />
        <MyStack.Screen 
          name="Stories" 
          component={StoriesScreen}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
