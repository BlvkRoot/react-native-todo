import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';


export function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput 
                        placeholder='Enter your email'
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <View style={styles.footer}>
                        <Button iconName='chevron-right' title='Authenticate' />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        width: '100%'
    },
    content: {
        width: '100%',
        paddingHorizontal: 50,
    },
    form: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#800AAA',
        padding: 20
    },
    input: {
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#800AAA'
    },
    footer: {
        marginTop: 20
    }
});