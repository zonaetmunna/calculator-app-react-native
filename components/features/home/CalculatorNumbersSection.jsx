import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

const CalculatorNumbersSection = ({ onPress }) => {
	const { darkModeEnabled } = useContext(ThemeContext); // Use the context

	const buttons = [
		['C', '/', '*', '-'],
		['7', '8', '9', '+'],
		['4', '5', '6', '='],
		['1', '2', '3', '.'],
		['0', '='],
	];

	return (
		<View
			style={[
				styles.buttonContainer,
				darkModeEnabled ? styles.darkContainer : styles.lightContainer,
			]}>
			{buttons.map((row, index) => (
				<View key={index} style={styles.row}>
					{row.map((button) => (
						<TouchableOpacity
							key={button}
							style={[
								styles.button,
								button === '0' ? styles.buttonZero : {},
								/C|\/|\*|-|\+|=/.test(button)
									? darkModeEnabled
										? styles.darkButtonGray
										: styles.buttonGray
									: {},
							]}
							onPress={() => onPress(button)}>
							<Text
								style={[styles.buttonText, darkModeEnabled ? styles.darkText : styles.lightText]}>
								{button}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 2,
		paddingHorizontal: 20,
		paddingBottom: 20,
		width: '100%',
	},
	lightContainer: {
		backgroundColor: '#dbb6e3',
	},
	darkContainer: {
		backgroundColor: '#555',
	},
	row: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
		borderRadius: 5,
		height: 60,
	},
	buttonGray: {
		backgroundColor: '#d3d3d3',
	},
	darkButtonGray: {
		backgroundColor: '#888',
	},
	buttonZero: {
		flex: 2,
	},
	buttonText: {
		fontSize: 24,
	},
	lightText: {
		color: '#000',
	},
	darkText: {
		color: '#fff',
	},
});

export default CalculatorNumbersSection;
