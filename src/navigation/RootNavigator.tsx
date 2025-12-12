import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HotspotListScreen from "../screens/HotspotListScreen";
import HotspotDetailsScreen from "../screens/HotspotDetailsScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hotspots"
        component={HotspotListScreen}
        options={{ title: "Nearby Wi-Fi Hotspots" }}
      />
      <Stack.Screen
        name="Hotspot"
        component={HotspotDetailsScreen}
        options={{ title: "Hotspot Details" }}
      />
    </Stack.Navigator>
  );
}
