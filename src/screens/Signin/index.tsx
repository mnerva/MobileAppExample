import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./style";
import Header from "../../components/AuthHeader";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Button from "../../components/Button";
import GoogleLogin from "../../components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Header title="Sign In" onBackPress={handleBackPress} />
        <Input label="Email" placeholder="some@one.com"/>
        <Input isPassword label="Password" placeholder="******"/>
        <Button style={styles.button} title="Sign In" onPress={() => {}} />
        <Separator text='Or sign up with' />
        <GoogleLogin />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup" as never)}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;