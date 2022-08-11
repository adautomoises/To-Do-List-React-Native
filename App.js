import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import Home from "./src/pages/home/";
import CreateList from "./src/pages/createList/";
import ViewList from "./src/pages/viewList/";
// import EditList from "./src/pages/editList/";

import db from './src/services/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

const Stack = createStackNavigator();

export default function App() {

  const readDocuments = async () => {
    const query = await getDocs(collection(db, "Tasks/"));
    const data = query.json();
      console.log(data)
    }
    readDocuments();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="View List"
        component={ViewList}
        options={({ route }) => ({
          title: route.params.lista.name,
        })}
      />
      <Stack.Screen name="Create List" component={CreateList} />
      {/* <Stack.Screen name="Edit List" component={EditList} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}