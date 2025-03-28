import React, { useEffect } from 'react';
import { Image, TouchableOpacity, Alert } from "react-native";
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { styles } from './style';

// Google Discovery document
const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke"
};

const CLIENT_ID = 'WEB_CLIENT_ID.apps.googleusercontent.com';

const GoogleLogin = () => {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: CLIENT_ID,
    redirectUri: makeRedirectUri({
    }),
    responseType: ResponseType.IdToken,
    scopes: ['profile', 'email'],
  },
  discovery
);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log('ID Token:', id_token);
    } else if (response?.type === 'error') {
      Alert.alert('Login Error', 'Failed to log in with Google');
    }
  }, [response]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => promptAsync()}
      disabled={!request}
    >
      <Image style={styles.image} source={require('../../assets/images/google.png')} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
