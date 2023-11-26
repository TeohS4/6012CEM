import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Assume you have a Star component to display star ratings
const Star = ({ filled }) => (
    <Icon name={filled ? 'star' : 'star-o'} size={20} color={filled ? 'gold' : 'gray'} />
);

export default function Reviews({ navigation }) {
    const averageRating = 4.5; // Hardcoded average rating

    return (
        <View style={styles.container}>
            <Text style={styles.title}>The Shining</Text>
            <Image
                source={require('./assets/shining.png')}
                style={styles.bookImage}
            />

            <View style={styles.averageRatingContainer}>
                <View style={styles.averageStarContainer}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} filled={index < averageRating} />
                    ))}
                </View>
                <Text style={styles.averageRatingText}>Average Rating: {averageRating}</Text>
            </View>
            <View style={styles.line} />

            {/* Reviews Section */}
            <View style={styles.userReviewContainer}>
                <View style={styles.reviewDetails}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="user-circle" size={20} color="black" />
                        <Text style={{ marginLeft: 10 }}>Ng Yu Ernn</Text>
                        <Text style={{color:'grey'}}>25 Nov 2023</Text>
                    </View>
                    <View style={styles.starContainer}>
                        {[...Array(5)].map((_, index) => (
                            <Star key={index} filled={index < 4} />
                        ))}
                    </View>
                    <Image
                        source={require('./assets/review.png')}
                        style={styles.reviewImage}
                    />
                    <Text>This product is amazing! Best book i ever read.</Text>
                </View>
            </View>

            {/* Button to Leave a Review */}
            <Pressable style={styles.button} onPress={() => navigation.navigate('PostReview')}>
                <Text style={styles.buttonText}>Leave a Review</Text>
            </Pressable>
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
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    bookImage: {
        width: 140,
        height: 168,
        marginBottom: 20,
        borderRadius: 12,
    },
    averageRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    averageStarContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    averageRatingText: {
        marginLeft: 10,
        fontSize: 16,
    },
    userReviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    line: {
        width: '100%',
        height: 0.8,
        backgroundColor: 'grey',
        marginVertical: 20,
    },

    reviewDetails: {
        flex: 1,
        flexDirection: 'column',
    },
    starContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 12,
        marginTop: 20,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    reviewImage: {
        height: 110,
        width: 85,
        borderRadius: 12,
        justifyContent: 'center',
        marginBottom: 8,
    }
});
