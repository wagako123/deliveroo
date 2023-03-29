import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/Homescreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
