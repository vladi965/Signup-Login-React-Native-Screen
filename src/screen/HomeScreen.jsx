import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';
import {colors} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButtonWrapperOne}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonTwo} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
