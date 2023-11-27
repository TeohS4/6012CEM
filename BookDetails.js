import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import { FAB, Chip } from 'react-native-paper';

export default function BookDetails({ navigation }) {
    const addMsg = () => {
        // Show a toast message when the button is pressed
        Toast.show({
            text1: 'Added To Wishlist',
            type: 'success',
            visibilityTime: 1000,
            position: 'top',
        });
    };
    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this book :)',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared via:', result.activityType);
                } else {
                    console.log('Shared');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Dismissed');
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <FAB
                icon="star"
                color='yellow'
                style={styles.review}
                onPress={() => navigation.navigate('Reviews')}
                variant='secondary'
            />
            <FAB
                icon="share"
                style={styles.share}
                color='white'
                onPress={handleShare}
                variant='secondary'
            />
            <View style={styles.content}>
                {/* Book Title */}
                <Text style={styles.title}>The Shining</Text>
                <Chip
                    icon="book"
                    textStyle={styles.categoryText}
                    style={styles.categoryChip}
                >
                    Horror
                </Chip>
                {/* Image and Description Bar */}
                <Image source={require('./assets/shining.png')} style={styles.image} />
                <View style={styles.bar}>
                    <Pressable style={styles.info} onPress={() => navigation.navigate('Reviews')}>
                        <Icon name="star" size={20} color="yellow" />
                        <Text style={styles.text}>4.8 Ratings</Text>
                    </Pressable>
                    <View style={styles.info}>
                        <Icon name="book" size={20} color="black" />
                        <Text style={styles.text}>505 Pages</Text>
                    </View>
                    <View style={styles.info}>
                        <Icon name="language" size={20} color="black" />
                        <Text style={styles.text}>English</Text>
                    </View>
                </View>

                {/* Begin Book Info */}
                <View style={styles.card}>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.des}>
                        The Shining is a 1977 horror novel by American author Stephen King.
                        It is King's third published novel and first hardcover bestseller; its success
                        firmly established King as a preeminent author in the horror genre.
                    </Text>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.btn} onPress={() => navigation.navigate('Payment')}>
                            <Text style={styles.btnText}>Buy Now</Text>
                        </Pressable>
                        <Pressable style={styles.btnWish} onPress={addMsg}>
                            <Text style={styles.btnText}>Add To Wishlist</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2E2EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryChip: {
        alignContent: 'center',
        backgroundColor: '#006400',
        borderRadius: 20,
        margin: 7,
    },
    categoryText: {
        color: 'white',
        fontWeight: 'bold',
    },
    share: {
        position: 'absolute',
        top: 30,
        right: 20,
        zIndex: 1,
    },
    review: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 1,
    },
    content: {
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 12,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        opacity: 0.8,
        borderRadius: 20,
        marginBottom: 20,
    },
    image: {
        width: 130,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
    },
    text: {
        marginLeft: 5,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
        width: '125%',
        justifyContent: 'center',
        height: 'auto',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    des: {
        textAlign: 'justify',
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,

    },
    btn: {
        backgroundColor: 'black',
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: 50,
        marginRight: '2%',
    },
    btnWish: {
        backgroundColor: 'blue',
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: 50,
        marginLeft: '2%',
    },
    btnText: {
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'space-between', // Ensure equal space between buttons
        justifyContent: 'center'
    },
});
