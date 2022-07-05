import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {IRootStackParams} from 'routes';

import tw from 'tailwind-rn';

interface IProps {
  route: RouteProp<IRootStackParams, 'Book'>;
}

export const Book = ({route}: IProps) => {
  let {title} = route.params;

  return (
    <View style={tw('flex-1')}>
      <Text>{title}</Text>
    </View>
  );
};
