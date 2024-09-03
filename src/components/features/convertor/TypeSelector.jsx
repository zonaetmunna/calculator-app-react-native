import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TypeSelector = ({ currentType, onTypeChange }) => {
	const types = ['length', 'temperature', 'volume', 'mass', 'data'];

	const ScrollComponent = Platform.OS === 'web' ? 'div' : ScrollView;

	return (
		<ScrollComponent
			style={Platform.OS === 'web' ? {} : { flex: 1 }}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.container}>
			{types.map((type) => (
				<TouchableOpacity
					key={type}
					style={[styles.button, currentType === type && styles.selected]}
					onPress={() => onTypeChange(type)}>
					<Text style={styles.text}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
				</TouchableOpacity>
			))}
		</ScrollComponent>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
		overflowX: 'auto', // CSS for web only
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginHorizontal: 5,
		backgroundColor: '#dbb6e3',
		borderRadius: 5,
		display: 'inline-block', // CSS for web only
	},
	selected: {
		backgroundColor: '#a55fa5',
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
});

export default TypeSelector;
