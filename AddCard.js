import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function AddCard({ navigation }) {
    const addMsg = () => {
        Toast.show({
          type: 'success',
          text1: "Card Added",
          position: 'top',
          visibilityTime: 900,
        });
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Card</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Card Number</Text>
                    <TextInput style={styles.input} placeholder="Enter Card Number" />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>CVV</Text>
                    <TextInput style={styles.input} placeholder="Enter CVV" />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Expiry Date</Text>
                    {/* Replace this with a date picker component */}
                    <TextInput style={styles.input} placeholder="MM/YY" />
                </View>
                <Pressable style={styles.addButton} onPress={() => addMsg()}>
                    <Text style={styles.addButtonText}>Add Card</Text>
                </Pressable>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
    addButton: {
        backgroundColor: 'black',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
