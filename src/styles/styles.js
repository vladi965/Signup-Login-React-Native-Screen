import {colors} from '../utils/Colors';
import {fonts} from '../utils/fonts';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 20,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.Bold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    width: '90%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapperOne: {
    color: colors.white,
    backgroundColor: colors.primary,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    height: '100%',
  },
  loginButtonTwo: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  signupButtonText: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  // LoginScreen
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 98,
    marginTop: 10,
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 20,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  containerSignup: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
};
