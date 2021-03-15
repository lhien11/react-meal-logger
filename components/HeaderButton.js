import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import Colors from '../constants/Colors'
import { HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = props => {
	return <Button 
    {...props}
		IconComponent={Ionicons}
		iconSize={23}
		color={Platform.OS === 'android' ? 'white' : Colors.primary}
	/>
};

export default CustomHeaderButton;
