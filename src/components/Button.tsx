import React from 'react';
import {
  View,
  Text,
  StyleProp,
  TouchableOpacityProps,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import tw from 'tailwind-rn';

interface IProps extends TouchableOpacityProps {
  title: string;
  type?: 'primary' | 'secondary';
  style?: StyleProp<ViewProps>;
}

export const Button = ({title, style, type = 'primary', ...props}: IProps) => {
  return (
    <TouchableOpacity {...props}>
      <View style={[tw(styles[type]), style]}>
        <Text style={tw('text-white')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  primary: `bg-blue-500 p-2 w-32 items-center rounded`,
  secondary: `bg-orange-500 p-3 w-32 items-center rounded`,
};
