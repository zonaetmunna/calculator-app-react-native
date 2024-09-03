import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ConversionComponent from '../components/features/convertor/ConversionComponent';
import NumericInput from '../components/features/convertor/NumericInput';
import TypeSelector from '../components/features/convertor/TypeSelector';

const Convertor = () => {
	const [currentType, setCurrentType] = useState('length');
	const [inputValue, setInputValue] = useState('');

	return (
		<View style={styles.container}>
			<TypeSelector currentType={currentType} onTypeChange={setCurrentType} />
			<ConversionComponent type={currentType} inputValue={inputValue} />
			<NumericInput inputValue={inputValue} onInputChange={setInputValue} />
		</View>
	);
};

export default Convertor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});
