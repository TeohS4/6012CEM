import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import { Platform } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';

let ImagePicker = null;

if (Platform.OS !== 'web') {
    ImagePicker = require('react-native-image-picker').default;
}

export default function AddBook({ navigation }) {
    const [image, setImage] = useState(null);
    const [bookTitle, setBookTitle] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookCategory, setBookCategory] = useState('');
    const [bookDescription, setBookDescription] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('Fiction'); // Default category
    const [visible, setVisible] = useState(false); // Dropdown visibility state
    const showMenu = () => setVisible(true);
    const hideMenu = () => setVisible(false);
    const onCategorySelect = (category) => {
        setSelectedCategory(category);
        hideMenu();
    };

    const handleImageUpload = () => {
        if (Platform.OS !== 'web' && ImagePicker) {
            const options = {
                title: 'Select Image',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };

            ImagePicker.showImagePicker(options, (response) => {
                // Image picker logic
                if (response.didCancel) {
                    // Handle cancellation
                } else if (response.error) {
                    // Handle error
                } else if (response.uri) {
                    // Set the selected image URI to the 'image' state
                    setImage(response.uri);
                }
            });
        } else {
            // Handle image picking for web using input type="file"
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';

            fileInput.onchange = (event) => {
                const selectedFile = event.target.files[0];
                const reader = new FileReader();

                reader.onload = (event) => {
                    // Get the image URI after reading the file
                    const uploadedImage = event.target.result;
                    setImage(uploadedImage); // Set the image URI to the 'image' state
                };

                reader.readAsDataURL(selectedFile);
            };

            // Trigger file input click to open the file picker dialog
            fileInput.click();
        }
    };

    const handleSubmit = () => {
        Toast.show({
            type: 'success',
            text1: 'New Book Added',
            position: 'top',
            visibilityTime: 1000,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Add New Book</Text>
                <Pressable onPress={() => navigation.navigate('AdminLogin')} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>

            {/* Image Picker */}
            <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploader}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.uploadedImage} />
                ) : (
                    <Text>Upload Image</Text>
                )}
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Book Title"
                value={bookTitle}
                onChangeText={setBookTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Book Price"
                value={bookPrice}
                onChangeText={setBookPrice}
                keyboardType="numeric"
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
                style={[styles.input, { height: 100 }]}
                placeholder="Book Description"
                multiline
                value={bookDescription}
                onChangeText={setBookDescription}
            />

            {/* Submit button */}
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>

            {/* Toast component */}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    logoutButton: {
        padding: 8,
        borderRadius: 20,
        width: 80,
        backgroundColor: 'red',
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
    submitButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        borderRadius: 18,
    },
    submitButtonText: {
        color: 'white',
    },
    imageUploader: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 150,
        marginBottom: 20,
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
});
