import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Mass = ({ inputValue }) => {
	// Mass conversion specifics

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Mass Conversion</Text>
			<Text style={styles.result}>Input: {inputValue}</Text>
			{/* Display the converted values */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fef',
		borderRadius: 5,
	},
	header: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	result: {
		fontSize: 16,
		marginTop: 10,
	},
});

export default Mass;
