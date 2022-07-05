import {View, Text, Button} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store';

const Books = () => {
  const store = useStore();
  return (
    <View>
      {store.books.uppercasedBooks.map((book) => (
        <View key={book.title}>
          <Text>{book.title}</Text>
        </View>
      ))}
      <Button title="Add button" onPress={() => store.books.addBook('Test')} />
    </View>
  );
};

export default observer(Books);
