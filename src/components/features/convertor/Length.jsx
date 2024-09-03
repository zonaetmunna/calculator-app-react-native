import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { convertLength } from '../../../utils/conversionUtils';

const Length = ({ inputValue }) => {
	const [fromUnit, setFromUnit] = useState('meters');
	const [toUnit, setToUnit] = useState('kilometers');
	const [result, setResult] = useState('');

	const handleConvert = () => {
		const convertedValue = convertLength(inputValue, fromUnit, toUnit);
		setResult(convertedValue);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Length Conversion</Text>
			<Picker
				selectedValue={fromUnit}
				onValueChange={(itemValue, itemIndex) => setFromUnit(itemValue)}>
				{/* Picker items for different units */}
			</Picker>
			<Picker selectedValue={toUnit} onValueChange={(itemValue, itemIndex) => setToUnit(itemValue)}>
				{/* Picker items for different units */}
			</Picker>
			<Text style={styles.result}>Input: {inputValue}</Text>
			<Text style={styles.result}>Result: {result}</Text>
			<TouchableOpacity onPress={handleConvert}>
				<Text>Convert</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#eef',
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

export default Length;
