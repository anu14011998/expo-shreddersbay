import { View, Text , TouchableOpacity, Keyboard,KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
// import ConCompo from './components/ConCompo'
import { FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from 'react-native-vector-icons'

import { Provider } from 'react-redux'
import store from './redux/store'
import { CommonActions, NavigationContainer, RouteProp, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import T1Screen1 from './Navigation/Tab1/T1Screen1'
import T2Screen1 from './Navigation/Tab2/T2Screen1'
import T3Screen1 from './Navigation/Tab3/T3Screen1'
import T4Screen1 from './Navigation/Tab4/T4Screen1'
import T1Screen2 from './Navigation/Tab1/T1Screen2'
import T1Screen3 from './Navigation/Tab1/T1Screen3'
import T2Screen3 from './Navigation/Tab2/T2Screen3'
import T2Screen2 from './Navigation/Tab2/T2Screen2'
import T3Screen2 from './Navigation/Tab3/T3Screen2'
import T3Screen3 from './Navigation/Tab3/T3Screen3'
import T4Screen2 from './Navigation/Tab4/T4Screen2'
import T1Screen1modal1 from './Navigation/Tab1/T1Screen1modal1';
import Login from './components/Credential/Login';
import Signup from './components/Credential/Signup';
import shoppingCart from './components/ShoppingCart';
import ShoppingCart from './components/ShoppingCart';
import OpenCamAndGalT3S1 from './Navigation/Tab3/OpenCamAndGalT3S1';
import T2Screen3AddAddress2 from './Navigation/Tab2/T2Screen3AddAddress2';
import T2Screen2AddAddress from './Navigation/Tab2/T2Screen2AddAddress';
import * as Permissions from 'expo-permissions';










const App = () => {





  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const Stack1 = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='T1Screen1' component={T1Screen1} options={{ headerShown: false }} />
        <Stack.Screen name='T1Screen2' component={T1Screen2} />
        <Stack.Screen name='T1Screen3' component={T1Screen3} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='ShoppingCart' component={ShoppingCart} options={{
          headerTitle: '', // Hide the header title
        }}/>
        <Stack.Screen name='T1Screen1modal1' component={T1Screen1modal1}/>

      </Stack.Navigator>
    )
  }
  const Stack2 = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='T2Screen1' component={T2Screen1} options ={{
          headerTitle: 'Scrap Cart',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen
        name='T2Screen2AddAddress'
        component={T2Screen2AddAddress} 
        options ={{headerShown: false}}
        />

        <Stack.Screen
        name='T2Screen3AddAddress2'
        component={T2Screen3AddAddress2} 
        options ={{headerShown: false}}
                 
        
         />


        <Stack.Screen name='T2Screen2' component={T2Screen2} options={{
          headerTitle: 'Add Address',
          headerTitleAlign: 'center',
        }}
         />
        <Stack.Screen name='T2Screen3' component={T2Screen3} 
        options={{
          headerTitle: 'Save Address',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='T1Screen1' component={T1Screen1} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }
  const Stack3 = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='T3Screen1'
        component={T3Screen1}
         options=
         {{ 
            headerTitle: 'Scrap Item',
            headerTitleAlign: 'center', 
            cardStyle: {backgroundColor: '#fff'},
            
         }}

         
          />
        <Stack.Screen name='T3Screen2' component={T3Screen2} />
        <Stack.Screen name='T3Screen3' component={T3Screen3} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='T1Screen1' component={T1Screen1} options={{ headerShown: false }} />
      
        <Stack.Screen name='OpenCamAndGalScreen' component={OpenCamAndGalT3S1} options={{headerShown:false}}/>

      </Stack.Navigator>
    )
  }
  const Stack4 = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='T3Screen1' component={T4Screen1} options={{ headerShown: false }} />
        <Stack.Screen name='T3Screen2' component={T4Screen2} />
        <Stack.Screen name='T3Screen3' component={T4Screen1} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='T1Screen1' component={T1Screen1} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }

  return (

    
    <Provider store={store}>
   

    <NavigationContainer>
      <Tab.Navigator  initialRouteName='T1Screen'
        screenOptions={({ route }) => ({

         unmountOnBlur: true, // Unmount the screen when it's not visible
          
          tabBarActiveTintColor:'#483948',
          tabBarInactiveTintColor:'black',
          tabBarActiveBackgroundColor:'lightgrey',
          tabBarInactiveBackgroundColor:'#fff',
          tabBarLabelStyle:{
            fontSize: 15,
          },
      
          // headerShown: false,
        })}
      >
        <Tab.Screen name='Tab1' component={Stack1}  options=
      {{
        headerShown: false,
        tabBarLabel:'Home',
        tabBarIcon: ({color,size}) => (
        <FontAwesome name="home" color={color} size={size}/>
        ),        
      }} />


        <Tab.Screen name='Scrap Cart' component={Stack2} 
         options={({ navigation }) =>
  ({
          
          // headerTitle:'',
          // headerTitleAlign:'center',
          // headerLeft: () => (
          //   <FontAwesome
          //     name="arrow-left"
          //     size={25}
          //     color="black"
          //     style={{ marginLeft: 10 }}
          //     onPress={() => navigation.navigate('T2Screen1')}
          //   />
          // ),
          headerShown: false,
          tabBarLabel:'Scrap Cart',
          tabBarIcon: ({color,size}) => (
            <FontAwesome name="shopping-cart" color={color} size={size}/>
            ),

         
  })
        }
         
         />

        <Tab.Screen name='Scrap Item' component={Stack3} 

          options={{
            tabBarLabel: 'Sell',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (

            <FontAwesome  name="sellsy" color={color} size={size}/>
            ),
           
          }}
          
          />
        <Tab.Screen name='Tab4' component={Stack4} 
          options={{
            tabBarLabel:'Setting',
            tabBarIcon: ({color,size}) => (
            <Ionicons name="settings" color={color} size={size} />
             
              ),
           }}
           />
      </Tab.Navigator>
    </NavigationContainer>


  
    </Provider>
    


  )
}

export default App


