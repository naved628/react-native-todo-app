import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
    <View>
      <Text>Edit Task</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Button title="Update Task" onPress={handleUpdateTask} />
    </View>
  );
};

export default EditTask;
