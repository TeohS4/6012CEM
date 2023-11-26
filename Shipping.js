import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import Toast from 'react-native-toast-message';

export default function Shipping({ navigation }) {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const deleteMsg = () => {
        Toast.show({
            type: 'error',
            text1: 'Address Deleted',
            position: 'bottom',
            visibilityTime: 1000,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shipping Address</Text>

            <View style={styles.card}>
                {/* Address 1 */}
                <Pressable style={styles.editButton} onPress={() => { navigation.navigate('EditAdd') }}>
                    <Text style={styles.editText}>Edit</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={deleteMsg}>
                    <Icon name="trash" size={20} color="white" />
                </Pressable>
                <Text style={styles.bold}>Durian Road 12,</Text>
                <Text style={styles.bold}>New Straits Rd, Malaysia</Text>
                <Text style={styles.bold}>80568</Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title="Use as primary address"
                        checked={isChecked1}
                        onPress={() => {
                            setIsChecked1(!isChecked1);
                            setIsChecked2(false);
                        }}
                        containerStyle={styles.checkbox}
                    />
                </View>
            </View>

            <View style={styles.card}>
                {/* Address 2 */}
                <Pressable style={styles.editButton} onPress={() => { navigation.navigate('EditAdd') }}>
                    <Text style={styles.editText}>Edit</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={deleteMsg}>
                    <Icon name="trash" size={20} color="white" />
                </Pressable>
                <Text style={styles.bold}>Avocado Road 7,</Text>
                <Text style={styles.bold}>Lorong Avocado, Malaysia</Text>
                <Text style={styles.bold}>90256</Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title="Use as primary address"
                        checked={isChecked2}
                        onPress={() => {
                            setIsChecked2(!isChecked2);
                            setIsChecked1(false);
                        }}
                        containerStyle={styles.checkbox}
                    />
                </View>
            </View>

            <View style={styles.addNewAddress}>
                <Text style={styles.addNewAddressText}>Add New Address</Text>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddAddress')}>
                    <Icon name="plus" size={30} color="white" />
                </Pressable>
            </View>
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
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        width: '100%',
        position: 'relative',
    },
    bold: {
        fontWeight: 'bold',
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 13,
    },
    editText: {
        color: 'red',
        fontWeight: 'bold',
    },
    checkboxContainer: {
        position: 'relative'
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    useAddressText: {
        marginLeft: 5,
    },
    addNewAddress: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addNewAddressText: {
        marginRight: 10,
    },
    addButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5,
    },
    deleteButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: 33,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 1,
    },

});
