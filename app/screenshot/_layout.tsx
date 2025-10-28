import { Stack } from 'expo-router';

export default function ScrenLayout() {
  return (
    <Stack>
      <Stack.Screen name="[url]" options={{ headerShown: false }} />
    </Stack>
  );
}