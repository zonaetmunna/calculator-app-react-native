import React from 'react';
import { View } from 'react-native';
import Data from './Data';
import Length from './Length';
import Mass from './Mass';
import Temperature from './Temperature';
import Volume from './Volume';

const ConversionComponent = ({ type, inputValue }) => {
	const renderComponent = () => {
		switch (type) {
			case 'length':
				return <Length inputValue={inputValue} />;
			case 'temperature':
				return <Temperature inputValue={inputValue} />;
			case 'volume':
				return <Volume inputValue={inputValue} />;
			case 'mass':
				return <Mass inputValue={inputValue} />;
			case 'data':
				return <Data inputValue={inputValue} />;
			default:
				return null;
		}
	};

	return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};

export default ConversionComponent;
