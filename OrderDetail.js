import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderDetail({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order No. 68</Text>
            <Text style={styles.lightText}>Items: 2</Text>

            <View style={styles.card}>
                <View style={styles.bookInfo}>
                    <Image source={require('./assets/IT.png')} style={styles.bookImage} />
                    <View style={styles.bookDetails}>
                        <Text>IT - Stephen King</Text>
                        <Text style={styles.price}>RM 18</Text>
                    </View>
                    <Text style={styles.quantity}>x1</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.bookInfo}>
                    <Image source={require('./assets/shining.png')} style={styles.bookImage} />
                    <View style={styles.bookDetails}>
                        <Text>Harry Potter</Text>
                        <Text style={styles.price}>RM 16</Text>
                    </View>
                    <Text style={styles.quantity}>x1</Text>
                </View>
            </View>

            <Text style={styles.orderInfo}>Order Information</Text>
            <Text>Customer Name: Teoh Wei Jie</Text>
            <Text>Shipping Address: 1, Watermelon Road, 18100 UK</Text>
            <View style={styles.payment}>
                <Text>Payment Method: </Text>
                <Icon name='credit-card' size={20} style={styles.cardIcon} />
                <Text>**** **** **** 8406</Text>
            </View>
            <Text>Total Amount Paid: RM34</Text>
            <Pressable style={styles.btn} onPress={()=>navigation.navigate('Orders')}>
                <Text style={styles.btnText}>Back</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    lightText: {
        opacity: 0.6,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    card: {
        marginVertical: 10,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bookInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    bookImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    bookDetails: {
        flex: 1,
    },
    quantity: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold',
    },
    orderInfo: {
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    payment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    cardIcon: {
        marginRight: 5,
    },
    btn: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 20,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
