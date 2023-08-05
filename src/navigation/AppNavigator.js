import {
  ForgotPassword,
  HomeScreen,
  OnboardingScreen,
  ResetPassword,
  SignIn,
  SignUp,
  PromoScreen,
  SearchScreen,
  CarDetailScreen,
  CheckoutScreen,
  ProtectionPlanScreen,
  ProfileScreen,
  EditProfileSceen,
  BillingScreen,
  ChangePassword,
  AddCar,
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
      <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen
        name="ProtectionPlanScreen"
        component={ProtectionPlanScreen}
      />
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
      <Stack.Screen name="PromoScreen" component={PromoScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileSceen} />
      <Stack.Screen name="BillingScreen" component={BillingScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

const AddCarNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="AddCar" component={AddCar} />
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
        component={AddCarNavigator}
        options={{
          tabBarLabel: "Add vehicle",
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
