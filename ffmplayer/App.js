import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navegation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
