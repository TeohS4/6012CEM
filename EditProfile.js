import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function EditProfile({ navigation }) {
    const updateMsg = () => {
        Toast.show({
            type: 'success',
            text1: 'Profile Updated',
            position: 'bottom',
            visibilityTime: 1000,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('./assets/icebear.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.usernameText}>Teoh Wei Jie</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Icon name="envelope" size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value="weijieteoh26@gmail.com"
                    />
                </View>
                <View style={styles.input}>
                    <Icon name="lock" size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="New Password"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <Pressable style={styles.button} onPress={updateMsg}>
                <Text style={styles.buttonText}>Update</Text>
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
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    usernameText: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    textInput: {
        flex: 1,
        height: 40,
    },
    icon: {
        marginRight: 10,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
