import axios from 'axios';
import Constants from 'expo-constants';

const { EXPO_PUBLIC_IGDB_DB_URL, EXPO_PUBLIC_IGDB_CLIENT_ID, EXPO_PUBLIC_IGDB_TOKEN } = Constants.expoConfig.extra;

export const igdbApi = axios.create({
  baseURL: EXPO_PUBLIC_IGDB_DB_URL,
  headers: {
    'Client-ID': EXPO_PUBLIC_IGDB_CLIENT_ID,
    'Authorization': `Bearer ${EXPO_PUBLIC_IGDB_TOKEN}`,
    'Accept': 'application/json',
  },
});