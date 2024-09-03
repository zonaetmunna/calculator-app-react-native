import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import Navigation from './src/navigation';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Manrope-Bold': require('./src/assets/fonts/Manrope-Bold.ttf'),
		'Manrope-Regular': require('./src/assets/fonts/Manrope-Regular.ttf'),
		'Manrope-Medium': require('./src/assets/fonts/Manrope-Medium.ttf'),
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
