import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function PaySuccess({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/pay.gif')} style={styles.image} />
            <Text style={styles.bold}>Payment Success</Text>
            <Text style={styles.text}>Order successful, your order will be shipped shortly</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Navigation')}>
                <Text style={styles.buttonText}>Return to Homepage</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    image: {
        width: '80%',
        height: '60%',
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10,
    },
    text: {
        opacity: 0.75,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
