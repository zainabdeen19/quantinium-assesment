import { StyleSheet } from "react-native";
import { colors } from "../theme/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },

  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.muted,
  },

  listContent: {
    paddingBottom: 24,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },

  card: {
    width: "23%",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  ssid: {
    marginTop: 4,
    fontSize: 12,
    color: colors.secondary,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  meta: {
    fontSize: 11,
    color: colors.muted,
  },

  badge: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "500",
    color: colors.primary,
  },
});
