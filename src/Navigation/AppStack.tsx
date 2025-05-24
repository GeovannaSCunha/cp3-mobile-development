import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./Home";
import PostDetails from "@/Screens/PostDetails";
import { PostDetailsParams } from "@/types/navigation";

const Stack = createNativeStackNavigator<PostDetailsParams>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "Detalhes do Post" }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
