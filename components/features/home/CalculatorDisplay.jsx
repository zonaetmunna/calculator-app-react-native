import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalculatorDisplay = ({ expression, result }) => {
	return (
		<View style={styles.displayContainer}>
			<Text style={styles.expression}>{expression}</Text>
			<View style={styles.line} />
			<Text style={styles.result}>{result}</Text>
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
		backgroundColor: '#dbb6e3',
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
});

export default CalculatorDisplay;
