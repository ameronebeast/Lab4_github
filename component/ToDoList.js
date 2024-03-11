import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoForm from './ToDoForm'; // Ensure the import path is correct
import ToDoList from './ToDoList'; // Ensure the import path is correct

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText.trim())) return; // Prevent adding empty or duplicate tasks
    setTasks([...tasks, taskText.trim()]);
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

