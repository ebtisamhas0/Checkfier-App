import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';
import Home from './screen/Home';
import Signup from './screen/Signup';  
import Rewards1 from './screen/Rewards1';
import Rewards2 from './screen/Rewards2';
import Rewards3 from './screen/Rewards3';
import Setting from './screen/Setting';
import About from './screen/About';
import Contact from './screen/Contact';
import Change from './screen/Change';
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} 
          options={
            {
            headerShown:false
          }
          }
      />
      <Stack.Screen
          name="Signup"
          component={Signup}
          options={
            {
            headerShown:false
          }
          }
      />
      <Stack.Screen
          name="Rewards1"
          component={Rewards1}
          options={
            {
            headerShown:false
          }
          }
          />
      <Stack.Screen
          name="Rewards2"
          component={Rewards2}
          options={
            {
            headerShown:false
          }
          }
          />
           <Stack.Screen
          name="Rewards3"
          component={Rewards3}
          options={
            {
            headerShown:false
          }
          }
          />
          <Stack.Screen
          name="Setting"
          component={Setting}
          options={
            {
            headerShown:false
          }
          }
          />
          <Stack.Screen
          name="About"
          component={About}
          options={
            {
            headerShown:false
          }
          }
          />
        
          <Stack.Screen
          name="Contact"
          component={Contact}
          options={
            {
            headerShown:false
          }
          }
          />
             <Stack.Screen
          name="Change"
          component={Change}
          options={
            {
            headerShown:false
          }
          }
          />
        </Stack.Navigator>
        </NavigationContainer>
   
  );
 


}




