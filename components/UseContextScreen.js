import React, { useContext, useState } from 'react';
import { Text, View, Button } from 'react-native';

const ThemeContext = React.createContext();

const UseContextScreen = () => {
    return (
        <ThemeContext.Provider value={{ theme: 'dark' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemeComponent />
          </View>
        </ThemeContext.Provider>
      );
    };
    
    const ThemeComponent = () => {
      const { theme } = useContext(ThemeContext);
    
      return (
        <View>
          <Text>The current theme is {theme}</Text>
        </View>
      );
    };
    export  default  UseContextScreen
    