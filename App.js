import React from "react";
import { StatusBar, View, TouchableOpacity } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";



export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#2a2a2a" barStyle="light-content" />
      <Routes />
      
    </NavigationContainer>

    
  );
}
