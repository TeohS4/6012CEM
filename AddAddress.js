import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-web';
import Toast from 'react-native-toast-message';

export default function AddAddress({ navigation }) {
    const saveMsg = () => {
        Toast.show({
            type: 'success',
            text1: 'New Address Added',
            position: 'top',
            visibilityTime: 900,
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Address</Text>
            <Text style={styles.label}>Address Line 1</Text>
            <TextInput
                style={styles.input}
                value=''
            />
            <Text style={styles.label}>Address Line 2</Text>
            <TextInput
                style={styles.input}
                value=''
            />
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
                style={styles.input}
                value=''
            />
            <Text style={styles.label}>Country</Text>
            <TextInput
                style={styles.input}
                value=''
            />
            <Pressable style={styles.saveButton} onPress={() => saveMsg()}>
                <Text style={styles.saveText}>Save Changes</Text>
            </Pressable>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: '100%',
    },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: 'black',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    saveText: {
        color: 'white',
        textAlign: 'center',
    },
})