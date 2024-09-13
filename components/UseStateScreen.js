import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const UseStateScreen = () => {
  const [inputText, setInputText] = useState(''); // Managing User Input
  const [isVisible, setIsVisible] = useState(false); // Toggling UI Elements
  const [count, setCount] = useState(0); // Handling Counters or Incremental Changes


  useEffect(() => {
    console.log(`Input text changed: ${inputText}`);
  }, [inputText]); 

 
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); 


  useEffect(() => {
    console.log('Component mounted, simulating API call...');


    const timer = setTimeout(() => {
      console.log('API call completed!');
    }, 2000);

   
    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styles.container}>
    
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here..."
          onChangeText={text => setInputText(text)}
          value={inputText}
          style={styles.input}
        />
        <Text style={styles.text}>You typed: {inputText}</Text>
      </View>

      
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsVisible(!isVisible)}
        >
          <Text style={styles.buttonText}>Toggle Visibility</Text>
        </TouchableOpacity>
        {isVisible && <Text style={styles.text}>Hello! Now you see me.</Text>}
      </View>


      <View style={styles.section}>
        <Text style={styles.text}>Count: {count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UseStateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderRadius: 10, 
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20, 
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
