import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Volume = ({ inputValue }) => {
	// Volume conversion logic

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Volume Conversion</Text>
			<Text style={styles.result}>Input: {inputValue}</Text>
			{/* Conversion results */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#eff',
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

export default Volume;
