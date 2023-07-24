import {
  ForgotPassword,
  HomeScreen,
  OnboardingScreen,
  ResetPassword,
  SignIn,
  SignUp,
} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AddCarIcon,
  FavoriteIcon,
  HomeIcon,
  ProfileIcon,
} from "../assets/icons";
import { wp } from "../utils/responsive-dimension";
import CustomBottomTab from "./components/CustomButtomTab";
import { Platform } from "react-native";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const DummyNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomBottomTab {...props} />}
      screenOptions={{ headerShown: false }}
      keyboardAvoidingView="behavior" // Add this prop to handle keyboard behavior
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -64} // Adjust the vertical offset if needed
    >
      <BottomTab.Screen
        name="Home"
        component={DummyNavigator}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={DummyNavigator}
        options={{
          tabBarLabel: "Favorite",
        }}
      />
      <BottomTab.Screen
        name="Add Vehicle"
        component={DummyNavigator}
        options={{
          tabBarLabel: "Add vehicle",
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={DummyNavigator}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
