import { StyleSheet } from 'react-native';
import { type ThemeSwitcherProps } from './type';

export function css(isLight: boolean, options: ThemeSwitcherProps['options']) {
    return StyleSheet.create({
        container: {
            width: 60,
            height: 35,
            borderRadius: 5,
            borderWidth: 2,
            justifyContent: 'center',
            padding: 5,
            borderColor: isLight
                ? options?.containerColor?.light?.border
                : options?.containerColor?.dark?.border,
            backgroundColor: isLight
                ? options?.containerColor?.light?.background
                : options?.containerColor?.dark?.background
        },
        circle: {
            width: 25,
            height: 25,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: isLight
                ? options?.buttonColor?.light?.border
                : options?.buttonColor?.dark?.border,
            backgroundColor: isLight
                ? options?.buttonColor?.light?.background
                : options?.buttonColor?.dark?.background,
        },
    });
}