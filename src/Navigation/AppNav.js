import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ScannerScreen from '../Screens/ScannerScreens/ScannerScreen';
import ConfirmationScreen from '../Screens/ScannerScreens/ConfirmationScreen';
import SuccesScreen from '../Screens/ScannerScreens/SuccesScreen';
import CategorieScreen from '../Screens/StockScreens/CategorieScreen';
import DetailsProduitScreen from '../Screens/StockScreens/DetailsProduitScreen';
import { Dimensions } from 'react-native';
import ListeProduitsScreen from '../Screens/StockScreens/ListeProduitsScreen';






const Stack = createStackNavigator(); 

 const  AppNav = ()=> {
    return (
      <NavigationContainer>
       
        <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="scanner"
            component={ScannerScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="listProduit"
            component={ListeProduitsScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen 
          name='stock'
          component={CategorieScreen}
          options={{headerShown:false}} />

          <Stack.Screen 
          name='detailProduit'
          component={DetailsProduitScreen}
          options={{headerShown:false}} />

          <Stack.Screen
          name='confirmerScreen'
          component={ConfirmationScreen} 
          options={{headerShown:false}} />

          <Stack.Screen 
          name='succesScreen'
          component={SuccesScreen}
          options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

export default AppNav;
