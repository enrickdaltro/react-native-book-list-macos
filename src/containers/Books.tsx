import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store/root';

import tw from 'tailwind-rn';
import {Button} from 'components';
import {useNavigation} from '@react-navigation/native';

export const Books = observer(() => {
  const [title, setTitle] = useState('');

  const store = useStore();
  const {navigate} = useNavigation();

  useEffect(() => {
    store.books.fetchBooks();
  }, []);

  return (
    <View style={tw('p-3')}>
      <Text style={tw('font-bold')}>My favorite books</Text>
      {store.books.books.map((book) => (
        <TouchableOpacity
          onPress={() => navigate('Book', {title: book.title})}
          key={book.createdAt}
          style={tw('py-1')}>
          <Text style={tw('text-sm')}>{book.title}</Text>
        </TouchableOpacity>
      ))}

      <Text style={tw('font-bold mt-6 mb-2')}>New book</Text>
      <View style={tw('flex-row')}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={tw('flex-1 bg-white rounded p-1')}
          placeholder="Book title"
        />
        <Button
          title="Add Book"
          onPress={() => store.books.addBook(title)}
          style={tw('ml-2')}
        />
      </View>
    </View>
  );
});
