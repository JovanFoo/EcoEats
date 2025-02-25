// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { View } from 'react-native';

export function Icon({ size, style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={size} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
export function Fa6Icon({ size, style, ...rest }: IconProps<ComponentProps<typeof FontAwesome6>['name']>) {
  return (
    <>
        <FontAwesome6  size={size} style={[{ marginBottom: -3 }, style]} {...rest} />
    </>
  );
}

// View more icons examples at https://react-icons.github.io/react-icons/icons/io5/