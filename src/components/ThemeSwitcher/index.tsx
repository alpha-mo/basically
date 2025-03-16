import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, FC } from 'react';
import { TouchableOpacity, Animated, Easing, View } from 'react-native';
import { type ThemeSwitcherProps, themeSwitcherPropsInit as init } from './type';
import { css } from './style';
import { mergeOptions } from './util';

/**
 * Props: {@link ThemeSwitcherProps}
 * - `onToggle?`: {@link ThemeSwitcherProps.onToggle onToggle}
 * - `options?`: {@link ThemeSwitcherProps.options options}
 * - `style?`: {@link ThemeSwitcherProps.style style}
 *   * The `style` prop is meant for positioning the switch.
 *   * Example: `position: 'absolute'`
 *   * However, it can still be styled as a regular `View` component.
 */
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onToggle = init.onToggle, options = init, style, initialState = 'light' }) => {
    // Merging the provided options with the defaults
    const mergedOptions = mergeOptions(init.options, options);

    const [isLight, setIsLight] = useState(initialState === 'light');
    const [circlePosition] = useState(new Animated.Value(isLight ? 23 : 0));
    const styles = css(isLight, mergedOptions);

    const toggle = () => {
        setIsLight(previousState => !previousState);
        Animated.timing(circlePosition, {
            toValue: isLight ? 0 : 23,
            duration: 100,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
        if (onToggle) onToggle()
    };

    return (
        <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
            <View style={[styles.container, style]}>
                <Animated.View
                    style={[
                        styles.circle,
                        {
                            transform: [{ translateX: circlePosition }],
                        }
                    ]}
                >
                    <MaterialIcons
                        name={isLight ? 'light-mode' : 'dark-mode'}
                        size={20}
                        color={isLight ? mergedOptions?.iconColor?.light : mergedOptions?.iconColor?.dark}
                    />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};
