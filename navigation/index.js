import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { colors } from "../theme/index";
const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const settingsStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

function settingsStackScreens() {
  return (
    <settingsStack.Navigator screenOptions={{ headerShown: false }}>
      <settingsStack.Screen name="Settings" component={Settings} />
    </settingsStack.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreens}
        />

        <Tab.Screen
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="settings"
                color={color}
              />
            ),
          }}
          name="SettingsTab"
          component={settingsStackScreens}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
