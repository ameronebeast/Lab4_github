import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(''); // State to manage the input text

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999"
        onChangeText={setTaskText} // Update state on text change
        value={taskText} // Controlled input with current state
      />
      <Button 
        title="Add" 
        color="#4CAF50" 
        onPress={() => {
          addTask(taskText); // Pass the current input to the addTask function
          setTaskText(''); // Clear the input field after adding the task
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    color: '#555',
    borderRadius: 4,
  },
});

export default ToDoForm;
