import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export default function Books({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All Books');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    filterBooks(selectedCategory);
  }, [selectedCategory]);

  const filterBooks = (category) => {
    if (category === 'All Books') {
      setBooks(allBooks);
    } else {
      const filtered = allBooks.filter(book => book.category === category);
      setBooks(filtered);
    }
  };

  const allBooks = [
    {
      title: 'Futurama',
      category: 'Sci-Fi',
      price: 'RM 12',
      image: require('./assets/futurama.png'),
    },
    {
      title: 'To kill a Mocking Bird',
      category: 'Fiction',
      price: 'RM 10',
      image: require('./assets/bird.png'),
    },
    {
      title: 'IT - Stephen King',
      category: 'Horror',
      price: 'RM 20',
      image: require('./assets/IT.png'),
    },
    {
      title: 'Demon Slayer Vol 1',
      category: 'Horror',
      price: 'RM 15',
      image: require('./assets/slayer.png'),
    },
    {
      title: 'The Shining',
      category: 'Horror',
      price: 'RM 35',
      image: require('./assets/shining.png'),
    },
    {
      title: 'Aliens',
      category: 'Sci-Fi',
      price: 'RM 25',
      image: require('./assets/aliens.png'),
    },
  ];

  const handlePress = (category) => {
    setSelectedCategory(category);
  };

  const addCartMsg = (bookTitle) => {
    Toast.show({
      type: 'success',
      text1: `Added ${bookTitle} to Cart`,
      position: 'top',
      visibilityTime: 900,
    });
  };

  return (
    <View style={styles.container}>
      {/* Categories Bar */}
      <View style={styles.categoriesBar}>
        <Pressable onPress={() => handlePress('All Books')}>
          <Text style={selectedCategory === 'All Books' ? styles.categoryTextActive : styles.categoryText}>
            All Books
          </Text>
        </Pressable>

        <Pressable onPress={() => handlePress('Horror')}>
          <Text style={selectedCategory === 'Horror' ? styles.categoryTextActive : styles.categoryText}>
            Horror
          </Text>
        </Pressable>

        <Pressable onPress={() => handlePress('Fiction')}>
          <Text style={selectedCategory === 'Fiction' ? styles.categoryTextActive : styles.categoryText}>
            Fiction
          </Text>
        </Pressable>

        <Pressable onPress={() => handlePress('Sci-Fi')}>
          <Text style={selectedCategory === 'Sci-Fi' ? styles.categoryTextActive : styles.categoryText}>
            Sci-Fi
          </Text>
        </Pressable>

      </View>

      {/* List of Books */}
      <ScrollView style={styles.bookContainer}>
        {books.map((book, index) => (
          <View key={index} style={styles.bookItem}>
            <Pressable onPress={() => navigation.navigate('BookDetails', { book: book })}>
              <Image source={book.image} style={styles.bookImage} />
            </Pressable>
            <View style={styles.bookInfo}>
              <Pressable onPress={() => navigation.navigate('BookDetails', { book: book })}>
                <Text style={styles.bookTitle}>{book.title}</Text>
              </Pressable>
              <Text style={styles.bookCategory}>{book.category}</Text>
              <Text style={styles.bookPrice}>{book.price}</Text>
              {/* Add to Cart button */}
              <Button
                mode="contained"
                onPress={() => addCartMsg(book.title)}
                style={{
                  backgroundColor: '#245eff',
                  borderRadius: 20,
                  width: 140,
                }}
                labelStyle={{ color: 'white' }}
              >
                Add to Cart
              </Button>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Toast component */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  categoriesBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    width: '100%',
    padding: 10,
  },
  categoryText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  categoryTextActive: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
  bookContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 0,
  },
  bookItem: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  bookImage: {
    width: 100,
    height: 140,
    marginRight: 10,
    borderRadius: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8019',
  },
  bookPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});