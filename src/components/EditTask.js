import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditTask = ({ route, navigation }) => {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);

  const handleUpdateTask = () => {
    if (title.trim() !== '') {
      const updatedTask = {
        ...task,
        title,
      };
      route.params.onUpdateTask((prevTasks) =>
        prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Update Task" onPress={handleUpdateTask} />
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
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:12
  },
});

export default EditTask;
