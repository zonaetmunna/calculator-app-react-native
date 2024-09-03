import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { convertTemperature } from '../../../utils/conversionUtils';

const Temperature = ({ inputValue }) => {
	const [fromUnit, setFromUnit] = useState('Celsius');
	const [toUnit, setToUnit] = useState('Fahrenheit');
	const [result, setResult] = useState('');

	const handleConvert = () => {
		const convertedValue = convertTemperature(inputValue, fromUnit, toUnit);
		setResult(convertedValue);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Temperature Conversion</Text>
			<Picker selectedValue={fromUnit} onValueChange={(itemValue) => setFromUnit(itemValue)}>
				<Picker.Item label='Celsius' value='Celsius' />
				<Picker.Item label='Fahrenheit' value='Fahrenheit' />
				<Picker.Item label='Kelvin' value='Kelvin' />
			</Picker>
			<Picker selectedValue={toUnit} onValueChange={(itemValue) => setToUnit(itemValue)}>
				<Picker.Item label='Celsius' value='Celsius' />
				<Picker.Item label='Fahrenheit' value='Fahrenheit' />
				<Picker.Item label='Kelvin' value='Kelvin' />
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
		backgroundColor: '#fee',
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

export default Temperature;
