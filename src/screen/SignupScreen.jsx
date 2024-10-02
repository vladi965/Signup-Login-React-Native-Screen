import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {styles} from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.containerSignup}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'mail-outline'} size={30} color={colors.primary} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name={'lock'} size={30} color={colors.primary} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery(prev => !prev);
            }}>
            <SimpleLineIcons name={'eye'} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={'screen-smartphone'}
            size={30}
            color={colors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone no"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require('../assets/google.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
