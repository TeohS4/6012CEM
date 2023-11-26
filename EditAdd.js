import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function EditAdd({ navigation }) {
    const saveMsg = (bookTitle) => {
        Toast.show({
          type: 'success',
          text1: 'Address Updated',
          position: 'top',
          visibilityTime: 900,
        });
      };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Address Line 1'
                    value='Durian Road 12'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address Line 2'
                    value='New Straits Rd, Malaysia'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Zip Code'
                    value='80568'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Country'
                    value='Malaysia'
                />
            <Pressable style={styles.saveButton} onPress={() => saveMsg()}>
                <Text style={styles.saveText}>Save Changes</Text>
            </Pressable>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
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
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 16,
        width: '100%',
    },
    saveButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'black',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: '90%',
    },
    saveText: {
        color: 'white',
        textAlign: 'center',
    },
});
