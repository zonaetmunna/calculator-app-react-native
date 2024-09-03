import AsyncStorage from '@react-native-async-storage/async-storage'; // Import at the top
import React, { createContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(false);

	// Function to get the storage method
	const getStorage = () => {
		if (Platform.OS === 'web') {
			return {
				getItem: (key) => Promise.resolve(localStorage.getItem(key)),
				setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
			};
		} else {
			return AsyncStorage;
		}
	};

	useEffect(() => {
		const fetchDarkModeSetting = async () => {
			const storage = getStorage();
			const savedDarkMode = await storage.getItem('darkMode');
			if (savedDarkMode !== null) {
				setDarkModeEnabled(savedDarkMode === 'true');
			}
		};
		fetchDarkModeSetting();
	}, []);

	const toggleDarkMode = async () => {
		const newDarkMode = !darkModeEnabled;
		setDarkModeEnabled(newDarkMode);

		const storage = getStorage();
		await storage.setItem('darkMode', newDarkMode.toString());
	};

	return (
		<ThemeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
