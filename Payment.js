import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, Divider, Provider } from 'react-native-paper';

export default function Payment({ navigation }) {
    const bookData = [
        {
            title: 'Aliens',
            quantity: 1,
            price: 'RM 25',
            image: require('./assets/aliens.png'), // Replace with actual image source
        },
        {
            title: 'IT - Stephen King',
            quantity: 1,
            price: 'RM 20',
            image: require('./assets/IT.png'), // Replace with actual image source
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('Cash on Delivery'); // Default method
    const [visible, setVisible] = useState(false); // Dropdown visibility state
    const showMenu = () => setVisible(true);
    const hideMenu = () => setVisible(false);
    const onCategorySelect = (category) => {
        setSelectedCategory(category);
        hideMenu();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment</Text>

            <View style={styles.bar}>
                <Text style={styles.label}>Image</Text>
                <Text style={styles.label}>Title</Text>
                <Text style={styles.label}>Qty</Text>
                <Text style={styles.label}>Price</Text>
            </View>

            {bookData.map((book, index) => (
                <View key={index} style={styles.bookContainer}>
                    <View style={styles.bookDetails}>
                        <Image
                            source={book.image}
                            style={styles.bookImage}
                        />
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text>{book.quantity}</Text>
                        <Text>{book.price}</Text>
                    </View>
                </View>
            ))}

            <View style={styles.bottomSection}>

                <Text style={styles.priceLabel}>Select Payment Method:</Text>

                <Menu
                    visible={visible}
                    onDismiss={hideMenu}
                    anchor={<Pressable onPress={showMenu}><TextInput style={styles.input} value={selectedCategory} editable={false} /></Pressable>}
                >
                    <Menu.Item onPress={() => onCategorySelect('Cash On Delivery')} title="Cash On Delivery" />
                    <Menu.Item onPress={() => onCategorySelect('Debit / Credit Card')} title="Debit / Credit Card" />
                    <Menu.Item onPress={() => onCategorySelect('PayPal')} title="PayPal" />
                </Menu>

                <View style={styles.priceRow}>
                    <Text style={styles.priceLabel}>Total Price:</Text>
                    <Text style={styles.totalPrice}>RM 45</Text>
                </View>

                <Pressable style={styles.payNowButton} onPress={() => navigation.navigate('PaySuccess')}>
                    <Text style={styles.payNowText}>Pay Now</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: 'darkgrey', 
        borderRadius: 8,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8, 
      },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        width: '100%',
        padding: 10,
        borderRadius: 12,
    },
    label: {
        fontWeight: 'bold',
    },
    bookContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    bookDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        width: '100%',
    },
    bookImage: {
        width: 85,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
    },
    bookTitle: {
        fontWeight: 'bold',
        width: '25%',
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '80%',
    },
    priceLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    totalPrice: {
        fontSize: 16,
    },
    creditCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    creditCardText: {
        marginLeft: 10,
        fontSize: 16,
    },
    payNowButton: {
        backgroundColor: 'black',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    payNowText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    dropdownContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
    },
    dropdown: {
        borderRadius: 8,
        marginTop: -8,
        elevation: 4,
    },
    buttonStyle: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonTextStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
});
