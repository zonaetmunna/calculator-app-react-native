import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NumericInput = ({ inputValue, onInputChange }) => {
	const handlePress = (number) => {
		onInputChange(inputValue + number);
	};

	const handleClear = () => {
		onInputChange('');
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
				<Text style={styles.text}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
				<Text style={styles.text}>2</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
				<Text style={styles.text}>3</Text>
			</TouchableOpacity>
			{/* Additional buttons as needed */}
			<TouchableOpacity style={styles.button} onPress={handleClear}>
				<Text style={styles.text}>Clear</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	button: {
		padding: 10,
		margin: 5,
		backgroundColor: '#ccc',
		borderRadius: 5,
	},
	text: {
		fontSize: 18,
	},
});

export default NumericInput;
