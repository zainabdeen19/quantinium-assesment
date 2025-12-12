import { StyleSheet } from "react-native";
import { colors } from "../theme/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.bg,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },

  ssid: {
    marginTop: 4,
    color: colors.secondary,
  },

  info: {
    marginTop: 16,
    gap: 6,
  },

  statusSuccess: {
    marginTop: 12,
    color: colors.success,
    fontWeight: "600",
  },

  statusError: {
    marginTop: 12,
    color: colors.error,
    fontWeight: "600",
  },

  actions: {
    marginTop: 20,
  },
});
