import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import { Platform } from 'react-native';    

let ImagePicker = null;

if (Platform.OS !== 'web') {
    ImagePicker = require('react-native-image-picker').default;
}

export default function PostReview({ navigation }) {
    const [rating, setRating] = useState(0); // State to store the selected rating
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null); // State to store the uploaded image

    // Function to handle image selection/upload
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

    // Function to handle review submission
    const submitReview = () => {
        Toast.show({
            type: 'success',
            text1: 'Review Submitted!',
            position: 'top',
            visibilityTime: 1000,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post a Review</Text>

            {/* Star Rating */}
            <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setRating(index + 1)}
                        activeOpacity={0.7}
                    >
                        <Icon
                            name={index < rating ? 'star' : 'star-o'}
                            size={30}
                            color={index < rating ? 'gold' : 'gray'}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Input fields */}
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Comment"
                multiline
                value={comment}
                onChangeText={(text) => setComment(text)}
            />

            {/* Image Picker */}
            <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploader}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.uploadedImage} />
                ) : (
                    <Text>Upload Image</Text>
                )}
            </TouchableOpacity>

            {/* Submit button */}
            <Pressable style={styles.submitButton} onPress={submitReview}>
                <Text style={styles.buttonText}>Submit Review</Text>
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
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 20,
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
    submitButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
