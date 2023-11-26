import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native';

export default function Home({navigation}) {

    const handleBookPress = () => {
        navigation.navigate('BookDetails'); // Navigate to BookDetails screen
    };
    
    return (

        <View style={styles.container}>
        <Text style={styles.bigTitle}>Welcome to The BookShelf</Text>
            <Pressable style={styles.smallBook} onPress={handleBookPress}>
                <Image
                    source={require('./assets/futurama.png')}
                    style={styles.bigBookImage}
                />
                </Pressable>

            <Text style={styles.title}>Best Selling Books</Text>
            {/* Bottom books list */}
            <View style={styles.smallBooksContainer}>
                {/* Row 1 */}
                <Pressable style={styles.smallBook} onPress={handleBookPress}>
                    <Image
                        source={require('./assets/aliens.png')}
                        style={styles.smallBookImage}
                    />
                </Pressable>
                <Pressable style={styles.smallBook} onPress={handleBookPress}>
                    <Image
                        source={require('./assets/bird.png')}
                        style={styles.smallBookImage}
                    />
                </Pressable>

                {/* Row 2 */}
                <Pressable style={styles.smallBook} onPress={handleBookPress}>
                    <Image
                        source={require('./assets/IT.png')}
                        style={styles.smallBookImage}
                    />
                </Pressable>
                <Pressable style={styles.smallBook} onPress={handleBookPress}>
                    <Image
                        source={require('./assets/slayer.png')}
                        style={styles.smallBookImage}
                    />
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
    },
    bigTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    bigBookImage: {
        width: '100%',
        height: 330,
        borderRadius: 15,
    },
    smallBooksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallBook: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 8,
        marginBottom: 8,
    },
    smallBookImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
});
