import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Data = ({ inputValue }) => {
	// Data size conversion logic

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Data Conversion</Text>
			<Text style={styles.result}>Input: {inputValue}</Text>
			{/* Resulting data size conversions */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#def',
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

export default Data;
