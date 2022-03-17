import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens

import TasksScreen from "./screens/TasksScreen";
import DashboardScreen from './screens/DashboardScreen'

//Screen names

const tasksName = "Tasks";
const dashboardName = "Dashboard";

//Tab navigator

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={dashboardName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === dashboardName) {
              iconName = focused ? "grid" : "grid-outline";
            } else if (routeName === tasksName) {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
        //   tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name={dashboardName} component={DashboardScreen} />
        <Tab.Screen name={tasksName} component={TasksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
