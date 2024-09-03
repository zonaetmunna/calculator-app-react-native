import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
		'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
		'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<Navigation />
				<StatusBar />
				<FlashMessage position='top' floating statusBarHeight={30} />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({});
