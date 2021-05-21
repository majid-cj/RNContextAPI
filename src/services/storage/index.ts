import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AUTH_STORAGE_KEY,
  USER_STORAGE_KEY,
  VERIFY_STORAGE_KEY,
} from '../../constants';
import {
  Authentication,
  Token,
  Verification,
} from '../../models/authentication/types';

export const saveUser = async (user: Authentication) => {
  try {
    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<Authentication> => {
  try {
    const user = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return user === null ? undefined : JSON.parse(user);
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {
    throw error;
  }
};

export const saveAuth = async (auth: Token) => {
  try {
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
  } catch (error) {
    throw error;
  }
};

export const getAuth = async (): Promise<Token> => {
  try {
    const auth = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
    return auth === null ? undefined : JSON.parse(auth);
  } catch (error) {
    throw error;
  }
};

export const deleteAuth = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    throw error;
  }
};

export const saveVerify = async (auth: Verification) => {
  try {
    await AsyncStorage.setItem(VERIFY_STORAGE_KEY, JSON.stringify(auth));
  } catch (error) {
    throw error;
  }
};

export const getVerify = async (): Promise<Verification> => {
  try {
    const auth = await AsyncStorage.getItem(VERIFY_STORAGE_KEY);
    return auth === null ? undefined : JSON.parse(auth);
  } catch (error) {
    throw error;
  }
};

export const deleteVerify = async () => {
  try {
    await AsyncStorage.removeItem(VERIFY_STORAGE_KEY);
  } catch (error) {
    throw error;
  }
};
