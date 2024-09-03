import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const { darkModeEnabled, toggleDarkMode } = useContext(ThemeContext);

	const toggleNotifications = () => {
		setNotificationsEnabled(!notificationsEnabled);
	};

	return (
		<View
			style={[styles.container, darkModeEnabled ? styles.darkContainer : styles.lightContainer]}>
			<Text style={[styles.title, darkModeEnabled ? styles.darkText : styles.lightText]}>
				Settings
			</Text>

			<View style={styles.profileContainer}>
				<Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
				<View style={styles.profileInfo}>
					<Text style={[styles.profileName, darkModeEnabled ? styles.darkText : styles.lightText]}>
						John Doe
					</Text>
					<Text style={[styles.profileEmail, darkModeEnabled ? styles.darkText : styles.lightText]}>
						johndoe@example.com
					</Text>
				</View>
			</View>

			<View style={styles.option}>
				<Text style={[styles.optionText, darkModeEnabled ? styles.darkText : styles.lightText]}>
					Enable Notifications
				</Text>
				<Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
					onValueChange={toggleNotifications}
					value={notificationsEnabled}
				/>
			</View>

			<View style={styles.option}>
				<Text style={[styles.optionText, darkModeEnabled ? styles.darkText : styles.lightText]}>
					Dark Mode
				</Text>
				<Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={darkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
					onValueChange={toggleDarkMode}
					value={darkModeEnabled}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	darkContainer: {
		backgroundColor: '#333',
	},
	lightContainer: {
		backgroundColor: '#f2f2f2',
	},
	darkText: {
		color: '#fff',
	},
	lightText: {
		color: '#000',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	profileContainer: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},
	profileInfo: {
		flex: 1,
	},
	profileName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	profileEmail: {
		fontSize: 16,
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	optionText: {
		flex: 1,
		fontSize: 18,
	},
});

export default Settings;
