import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IButtonProps extends TouchableOpacityProps {
    title: string,
    iconName: string,
}

export function Button({ title, iconName, ...rest}: IButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}>
            <Feather
                name={iconName}
                size={25}
                color='white'
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#800AAA',
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 20
    },
    title: { 
        fontSize: 16,
        textAlign: 'center',  
        paddingLeft: 10, 
        color: 'white',

    }
});