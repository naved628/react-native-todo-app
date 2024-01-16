import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddTask = ({ route, navigation }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title,
      };
      route.params.onAddTask((prevTasks) => [...prevTasks, newTask]);
      navigation.goBack();
    }
  };

  return (
    <View>
      <Text>Add Task</Text>
      <TextInput placeholder="Task Title" value={title} onChangeText={(text) => setTitle(text)} />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;
