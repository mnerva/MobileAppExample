import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "../src/components/Button";
import { router } from "expo-router";

export default function SplashScreen() { 
   const handleSignUp = () => {
    router.push({pathname: "/signup"});
   };

  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assets/images/splash-image.png")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
         <Text style={styles.title}>You'll Find</Text>
         <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
         <Text style={styles.title}>Here!</Text>
       </View>
 
       <Button title="Sign In" onPress={handleSignUp} />
 
       <TouchableOpacity onPress={handleSignUp}>
         <Text style={styles.signUpText}>Sign Up</Text>
       </TouchableOpacity>
    </View>
  );
}