import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerTitle: "Products",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ShoppingCart")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  padding: 8,
                }}
              >
                <SimpleLineIcons name="basket" size={22} color="black" />
                <Text style={{ fontWeight: "500" }}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />

        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            headerTitle: "Product Detail",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerTitle: "Cart",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
