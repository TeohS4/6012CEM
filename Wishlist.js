import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function Wishlist() {
    const removeBook = () => {
        Toast.show({
          type: 'info',
          text1: 'Book Removed',
          position: 'bottom',
          visibilityTime: 850,
        });
      };

    return (
        <View style={styles.bookContainer}>
            <Text style = {styles.title}>Wish List</Text>
            <View style={styles.bookItem}>
                <Image source={require('./assets/futurama.png')} style={styles.bookImage} />
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>The Shining</Text>
                    <Text style={styles.bookCategory}>Horror</Text>
                    <Text style={styles.bookPrice}>RM 35</Text>
                </View>
                <Pressable style={styles.removeButton} onPress={removeBook}>
                    <Text style={styles.removeText}>Remove</Text>
                </Pressable>
            </View>
            <View style={styles.horizontalLine} />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    bookImage: {
        width: 80,
        height: 120,
        marginRight: 10,
    },
    bookInfo: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookCategory: {
        fontSize: 14,
        color: '#666',
    },
    bookPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    removeButton: {
        backgroundColor: 'black',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeText: {
        color: 'white',
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },

})