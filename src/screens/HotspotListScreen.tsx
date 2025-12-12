import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";

import hotspots from "../../assets/data/hotspots.json";
import { Hotspot } from "../types/hotspot";
import { styles } from "./HotspotListScreen.styles";

type Props = {
  navigation: {
    navigate: (screen: string, params?: unknown) => void;
  };
};

export default function HotspotListScreen({ navigation }: Props) {
  const renderItem: ListRenderItem<Hotspot> = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate("Hotspot", { hotspot: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.ssid}>{item.ssid}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>Signal {item.signal}%</Text>
        <Text style={styles.meta}>Ch {item.channel}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.provider}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Wi-Fi Hotspots</Text>
      <Text style={styles.subtitle}>
        Showing {hotspots.length} available networks
      </Text>

      <FlatList
        data={hotspots}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
}
