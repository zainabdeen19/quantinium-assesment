import { View, Text, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";
import { styles } from "./HotspotDetailsScreen.styles";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Hotspot"
>;

type ConnectionState = "idle" | "loading" | "success" | "error";

export default function HotspotDetailsScreen({ route }: Props) {
  const { hotspot } = route.params;
  const [status, setStatus] = useState<ConnectionState>("idle");

  const handleConnect = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus(Math.random() > 0.2 ? "success" : "error");
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hotspot.name}</Text>
      <Text style={styles.ssid}>{hotspot.ssid}</Text>

      <View style={styles.info}>
        <Text>Provider: {hotspot.provider}</Text>
        <Text>Signal: {hotspot.signal}%</Text>
        <Text>Channel: {hotspot.channel}</Text>
      </View>

      {status === "loading" && <ActivityIndicator />}
      {status === "success" && (
        <Text style={styles.statusSuccess}>
          Connected successfully
        </Text>
      )}
      {status === "error" && (
        <Text style={styles.statusError}>
          Connection failed. Please try again.
        </Text>
      )}

      <View style={styles.actions}>
        <Button title="Connect" onPress={handleConnect} />
      </View>
    </View>
  );
}
