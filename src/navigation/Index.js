//install tab screen from tab navigation

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "../screens/Home";
import Headphones from "../screens/Headphones";
import Details from "../screens/Product-Details";
import Earphones from "../screens/Earphones";
import Speakers from "../screens/Speakers";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme/Colors";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

//creating tab
const Tab = createBottomTabNavigator();

//navigation for home screen
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
//headphones screen
const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HeadphonesStack.Screen name="Details" component={Details} />
    </HeadphonesStack.Navigator>
  );
}

//earphone screen
const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      {/* first screen */}
      <EarphonesStack.Screen name="Details" component={Details} />
      {/* 2nd screen/ details screen */}
    </EarphonesStack.Navigator>
  );
}

//speaker screen
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

//cart screen
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

//for icon

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "Feather") {
    return <Feather name={name} size={24} color={color} />;
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
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >

        <Tab.Screen
          name="HomeTab"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Ionicons"} name="home" color={color} />
            ),
          }}
          component={HomeStackScreen}
        />

        <Tab.Screen
          name="HeadphonesTab"
          options={{
            title: "Headphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Feather"}
                name="headphones"
                color={color}
              />
            ),
          }}
          component={HeadphonesStackScreen}
        />

        <Tab.Screen
          name="EarphonesTab"
          options={{
            title: "Earphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"SimpleLineIcons"}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
          component={EarphonesStackScreen}
        />

        <Tab.Screen
          name="SpeakersTab"
          options={{
            title: "Speaker",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Feather"} name="speaker" color={color} />
            ),
          }}
          component={SpeakersStackScreen}
        />

        <Tab.Screen
          name="CartTab"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="cart-outline"
                color={color}
              />
            ),
          }}
          component={CartStackScreen}
        />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
