import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import store from "./configs/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import stackRoutes from "./configs/stackRoutes";

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root>
          <Stack.Navigator headerMode="none">
            {stackRoutes.map((route, index) => (
              <Stack.Screen
                key={index}
                name={route.name}
                component={route.component}
              />
            ))}
          </Stack.Navigator>
        </Root>
      </NavigationContainer>
    </Provider>
  );
}
