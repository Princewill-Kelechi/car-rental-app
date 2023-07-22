import { OnboardingScreen, SignIn } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LogIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
