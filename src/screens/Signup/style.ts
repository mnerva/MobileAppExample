import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors"
import Button from "@/src/components/Button";

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 14,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 56,
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.blue,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default styles;