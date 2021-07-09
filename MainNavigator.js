import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation/stack';

import HomeFeedScreen from './screens/HomeFeedScreen';
import CameraScreen from './screens/CameraScreen';
import StoriesScreen from './screens/StoriesScreen';

const MainNavigator = createStackNavigator({
  Home: HomeFeedScreen,
  Cam: CameraScreen,
  Stories: StoriesScreen
});

export default createAppContainer(MainNavigator);
