import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screen/Home";
import Detail from "./src/Screen/Detail";
import DataContextProvider from "./context";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <DataContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer> 
  </DataContextProvider>
  );
}
