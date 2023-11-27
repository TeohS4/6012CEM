import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { Menu, Divider, Provider } from 'react-native-paper';

export default function EditBook({ navigation }) {
    const [bookTitle, setBookTitle] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookCategory, setBookCategory] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [imageUri, setImageUri] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('Fiction'); // Default category
    const [visible, setVisible] = useState(false); // Dropdown visibility state
    const showMenu = () => setVisible(true);
    const hideMenu = () => setVisible(false);
    const onCategorySelect = (category) => {
        setSelectedCategory(category);
        hideMenu();
    };

    const handleSave = () => {
        if (bookTitle && bookPrice && bookCategory && bookDescription) {
            // Logic to save book changes
            Toast.show({
                type: 'success',
                text1: 'Book details saved',
                position: 'bottom',
                visibilityTime: 1000,
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Please fill in all fields',
                position: 'bottom',
                visibilityTime: 1000,
            });
        }
    };

    const handleRemove = () => {
        // Logic to remove book
        Toast.show({
            type: 'info',
            text1: 'Book removed',
            position: 'bottom',
            visibilityTime: 1000,
        });
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/bird.png')} style={styles.image} />
            <View style={styles.line} />
            {/* Input fields */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Book Title"
                    value="To Kill a Mocking Bird"
                    onChangeText={setBookTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value='RM 20'
                    onChangeText={setBookTitle}
                />
                <Menu
                    visible={visible}
                    onDismiss={hideMenu}
                    anchor={<Pressable onPress={showMenu}><TextInput style={styles.input} value={selectedCategory} editable={false} /></Pressable>}
                >
                    <Menu.Item onPress={() => onCategorySelect('Fiction')} title="Fiction" />
                    <Menu.Item onPress={() => onCategorySelect('Non-Fiction')} title="Non-Fiction" />
                    <Menu.Item onPress={() => onCategorySelect('Science Fiction')} title="Science Fiction" />
                    <Menu.Item onPress={() => onCategorySelect('Horror')} title="Horror" />
                    <Menu.Item onPress={() => onCategorySelect('Romance')} title="Romance" />
                    <Menu.Item onPress={() => onCategorySelect('Others')} title="Others" />
                </Menu>
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value="To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools."
                    onChangeText={setBookTitle}
                />
            </View>

            {/* Save and Remove buttons */}
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>
                <Pressable style={styles.removeButton} onPress={handleRemove}>
                    <Text style={styles.buttonText}>Remove</Text>
                </Pressable>
            </View>

            {/* Toast component */}
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
    image: {
        width: 180,
        height: 250,
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    removeButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#d9d9d9',
        marginVertical: 10,
        margin: 12,
        width: '90%',
        alignSelf: 'center',
    },
});
