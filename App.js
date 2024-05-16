import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';


export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }
  



    return (
      <View /*style={styles.container}*/>
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      ></ScrollView>
      </View>
    );
  }