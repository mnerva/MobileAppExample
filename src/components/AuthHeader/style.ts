import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 54,
    marginTop: 10,
    marginLeft: 10,
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
});

export default styles;