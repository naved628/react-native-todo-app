import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:10,
    borderWidth:2
  },
});

export default AddTask;
