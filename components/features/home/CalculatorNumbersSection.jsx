import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CalculatorNumbersSection = ({ onPress }) => {
	const buttons = [
		['C', '/', '*', '-'],
		['7', '8', '9', '+'],
		['4', '5', '6', '='],
		['1', '2', '3', '.'],
		['0', '='],
	];

	return (
		<View style={styles.buttonContainer}>
			{buttons.map((row, index) => (
				<View key={index} style={styles.row}>
					{row.map((button) => (
						<TouchableOpacity
							key={button}
							style={[
								styles.button,
								button === '0' ? styles.buttonZero : {},
								/C|\/|\*|-|\+|=/.test(button) ? styles.buttonGray : {},
							]}
							onPress={() => onPress(button)}>
							<Text style={styles.buttonText}>{button}</Text>
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
		backgroundColor: '#dbb6e3',
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
		backgroundColor: '#fff',
		borderRadius: 5,
		height: 60,
	},
	buttonGray: {
		backgroundColor: '#d3d3d3',
	},
	buttonZero: {
		flex: 2,
	},
	buttonText: {
		fontSize: 24,
	},
});

export default CalculatorNumbersSection;
