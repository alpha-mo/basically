import React, { FC, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BtnProps } from './type';
/**
 * #### Props:
 ```tsx
 * - loading?: boolean
 * - style?: ViewStyle
 * - textStyle?: TextStyle
 * - text: string
 * - textColor?: ColorValue | undefined
 * - bgColor?: ColorValue | undefined
 * - disabled?: boolean
 * - disabledStyle?: {
        backgroundColor?: ColorValue | undefined
        color?: ColorValue | undefined
    }
 * - onPress?: TouchableOpacityProps['onPress']
 * - children?: React.ReactNode | undefined
 ```
 */
export const Button: FC<BtnProps> = ({
    loading = false, text, bgColor = '#005364',
    textColor = 'white', style, textStyle,
    disabled = false, disabledStyle, onPress, children
}) => {
    const buttonStyle = useMemo(() => ({
        backgroundColor: (disabled || loading) ? disabledStyle?.backgroundColor ?? bgColor : bgColor
    }), [disabled, loading, disabledStyle, bgColor]);

    return (
        <TouchableOpacity
            activeOpacity={disabled || loading ? 1 : 0.5}
            disabled={disabled || loading}
            onPress={onPress}
        >
            <View style={[styles.button, style, buttonStyle]}>
                {loading
                    ? (<ActivityIndicator size="small" color={textColor} />)
                    : children ??
                    <Text style={[
                        styles.text,
                        textStyle,
                        { color: (disabled || loading) ? disabledStyle?.color ?? textColor : textColor }
                    ]}>
                        {text}
                    </Text>
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 4,
        marginVertical: 5
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
        flexWrap: 'wrap',
        textAlign: 'center'
    }
});
