import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@/Navigation/AppStack";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
