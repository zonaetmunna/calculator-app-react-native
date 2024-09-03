import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

const CalculatorDisplay = ({ expression, result }) => {
	const { darkModeEnabled } = useContext(ThemeContext); // Use the context

	return (
		<View
			style={[styles.displayContainer, darkModeEnabled ? styles.darkDisplay : styles.lightDisplay]}>
			<Text style={[styles.expression, darkModeEnabled ? styles.darkText : styles.lightText]}>
				{expression}
			</Text>
			<View style={styles.line} />
			<Text style={[styles.result, darkModeEnabled ? styles.darkText : styles.lightText]}>
				{result}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	displayContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 20,
		width: '100%',
	},
	lightDisplay: {
		backgroundColor: '#dbb6e3',
	},
	darkDisplay: {
		backgroundColor: '#444',
	},
	expression: {
		fontSize: 24,
		marginBottom: 40,
	},
	result: {
		fontSize: 36,
		fontWeight: 'bold',
		marginBottom: 40,
	},
	line: {
		height: 1,
		backgroundColor: '#000',
		marginVertical: 10,
	},
	lightText: {
		color: '#000',
	},
	darkText: {
		color: '#fff',
	},
});

export default CalculatorDisplay;
