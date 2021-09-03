import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../components/Button';

export function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.emoji}>
                        📔
                    </Text>
                    <Text style={styles.title}>
                        BlvckRoot's {'\n'}
                        To-Do List
                    </Text>
                </View>

                <View style={styles.buttons}>
                    <Button iconName='log-in' title='Login' />
                    <Button iconName='user-plus' title='Register' />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 30, 
         color: '#800AAA',
         marginTop: 20,
         textAlign: 'center'
    },
    emoji: {
        width: '100%',
        fontSize: 60,
        textAlign: 'center',
        paddingHorizontal: 10,
        color: 'black'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});