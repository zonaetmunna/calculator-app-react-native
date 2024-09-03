import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import CalculatorDisplay from '../components/features/home/CalculatorDisplay';
import CalculatorNumbersSection from '../components/features/home/CalculatorNumbersSection';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('');

	const handlePress = (input) => {
		if (input === 'C') {
			setExpression('');
			setResult('');
		} else if (input === '=') {
			try {
				setResult(eval(expression));
			} catch (error) {
				setResult('Error');
			}
		} else {
			if (expression === '' && (input === '*' || input === '/' || input === '+')) {
				return; // Prevent starting with an operator
			}
			setExpression((prevExpression) => prevExpression + input);
		}
	};

	return (
		<View style={styles.container}>
			<CalculatorDisplay expression={expression} result={result} />
			<CalculatorNumbersSection onPress={handlePress} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
