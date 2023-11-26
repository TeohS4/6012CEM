import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function ManageBook({ navigation }) {
    const books = [
        {
            title: 'To kill a Mocking Bird',
            category: 'Fiction',
            price: 'RM 10',
            image: require('./assets/bird.png'),
        },
        {
            title: 'Aliens',
            category: 'Sci-Fi',
            price: 'RM 25',
            image: require('./assets/aliens.png'),
        },
    ];
    const deleteMsg = () => {
        Toast.show({
            type: 'info',
            text1: 'Book Deleted',
            position: 'top',
            visibilityTime: 1000,
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>List of Books</Text>
                <Pressable onPress={() => navigation.navigate('AdminLogin')} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>

            {books.map((book, index) => (
                <View key={index} style={styles.bookItem}>
                    <View style={styles.bookImageContainer}>
                        <Image source={book.image} style={styles.bookImage} />
                    </View>
                    <View style={styles.bookDetails}>
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text style={styles.bookText}>{book.category}</Text>
                        <Text style={styles.bookText}>{book.price}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.editDeleteContainer}>
                            <Pressable style={styles.editButton} onPress={()=>navigation.navigate('EditBook')}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </Pressable>
                            <Pressable style={styles.deleteButton} onPress={deleteMsg}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            ))}
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
    bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    bookImageContainer: {
        borderRadius: 18,
        overflow: 'hidden',
    },
    bookImage: {
        width: 80,
        height: 80,
    },
    bookDetails: {
        flex: 1,
        marginLeft: 10,
    },
    bookTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    bookText: {
        fontSize: 16,
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    editDeleteContainer: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    editButton: {
        backgroundColor: 'blue',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
