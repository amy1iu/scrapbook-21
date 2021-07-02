import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Switch } from 'react-native';
import { render } from 'react-dom';
import Constants from 'expo-constants';
//import Swiper from './SlidyThing';
import SwipeGesture, {todoList} from './SwipeableListItem';

export default class App extends React.Component {
  render() {
    return(
      <SwipeGesture/>
    )
  }
}

/*
import SwipeGesture from './slide-gesture'

export default class App extends React.Component {

  onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        console.log('right Swipe performed');
        break;
      }
       case 'up':{
        console.log('up Swipe performed');
        break;
      }
       case 'down':{
        console.log('down Swipe performed');
        break;
      }
       default : {
       console.log('Undeteceted action');
       }
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <SwipeGesture gestureStyle={styles.swipesGestureContainer} 
            onSwipePerformed={this.onSwipePerformed}>
            <Text>This is react native swipe gesture</Text>
            <Text>Used to detect the user swipes and function accordingly</Text>
          </SwipeGesture>
      </View>
        

    );
  }
}

const styles= StyleSheet.create({
 container:{
  height:'100%',
  width:'100%',
  alignContent: 'center',
  paddingTop:100,
 },
 swipesGestureContainer:{
  height:'100%',
  width:'100%'
 },
})


const AppNavigator = createSwitchNavigator();

class ScreenOne extends React.Component{
  render() {
    return (
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'pink',
      }}>
        <Button title= "Go to other screen" 
                onPress={() => this.props.navigation.navigate('RouteTwo')}
        />
      </View>
    )
  }
}

class ScreenTwo extends React.Component{
  render() {
    return (
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'brown',
      }}>
        <Button title='Go to other screen' 
                onPress={() => this.props.navigation.navigate('RouteOne')}
        />
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return <AppNavigator/> ;
  }
}

let id = 0

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row', 
    alignContent: 'center'
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight
  },
});

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value= {props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="delete"/>
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text: text, checked: false},
      ]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {return todo}
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      
        
      <Camera/>
      
    )
  }

}

*/
