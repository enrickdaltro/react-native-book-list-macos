import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store/root';

const Books = () => {
  const [title, setTitle] = useState('');

  const store = useStore();

  useEffect(() => {
    store.books.fetchBooks();
  }, []);

  return (
    <View>
      {store.books.uppercasedBooks.map((book) => (
        <View key={book.title}>
          <Text>{book.title}</Text>
        </View>
      ))}

      <TextInput value={title} onChangeText={setTitle} />
      <Button title="Add button" onPress={() => store.books.addBook(title)} />
    </View>
  );
};

export default observer(Books);
