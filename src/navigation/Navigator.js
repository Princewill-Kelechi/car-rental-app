import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

const BaseApp = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default BaseApp;
