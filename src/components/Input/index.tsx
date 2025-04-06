//index.tsx
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { TextInput, View, Animated, LayoutChangeEvent } from 'react-native';
import { InputProps, InputRef } from './type';
import { styles } from './style';


/**
 * ### Props
 * ```tsx
 * - style?: Pick<ViewStyle,
     'margin' | 'marginBottom' | 'marginTop' | 'marginLeft' | 'marginRight' | 'marginVertical' | 'marginHorizontal'
     | 'height' | 'width' | 'transform' | 'translateX' | 'translateY' | 'transformOrigin'
 >
 * - placeholderStyle?: Pick<TextStyle,
     'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'opacity' | 'textAlign' | 'textAlignVertical' | 'backgroundColor'
     | 'borderColor' | 'borderRadius' | 'borderWidth' | 'borderStyle'
 >
 * - placeholder?: string
 * - inputStyle?: Pick<TextStyle,
     'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'opacity' | 'textAlign' | 'textAlignVertical' | 'backgroundColor'
     | 'borderColor' | 'borderRadius' | 'borderWidth' | 'borderStyle'
 >
 * - rtl?: boolean // right to left
 * - keyboardType?: TextInputProps['keyboardType']
 * - onSubmit?: TextInputProps['onSubmitEditing']
 * - secure?: TextInputProps['secureTextEntry']
 * - error?: boolean
 * - errorBorderColor?: ColorValue | undefined
 *
 *
 * ```
 */
export const Input = forwardRef<InputRef, InputProps>(({
    placeholder, rtl, secure, error, style, inputStyle, returnKeyLabel,
    keyboardType, placeholderStyle, onSubmit, errorBorderColor, returnKeyType
}, ref) => {
    const [marginTop, setMarginTop] = useState(4);
    const [value, setValue] = useState('');
    const inputRef = useRef<TextInput>(null);
    const inputHeight = useRef(0);
    const placeholderHeight = useRef(0);
    const placeholderTop = useRef(new Animated.Value(0)).current;

    useImperativeHandle(ref, () => ({
        getValue: () => value,
        focus: () => inputRef.current?.focus()
    }));

    function handleTextChange(text: string): void {
        setValue(text);
    }

    const onInputLayout = (event: LayoutChangeEvent) => {
        inputHeight.current = event.nativeEvent.layout.height;
    };

    const onPlaceholderLayout = (event: LayoutChangeEvent) => {
        placeholderHeight.current = event.nativeEvent.layout.height;
    };

    const handleAnimation = (toValue: number) => {
        Animated.timing(placeholderTop, {
            toValue: toValue,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const handleOnFocus = () => {
        handleAnimation(-placeholderHeight.current + 4);
        setMarginTop(placeholderHeight.current);
    };

    const handleOnBlur = () => {
        const toValue = value.trim().length !== 0
            ? -placeholderHeight.current + 4
            : (inputHeight.current - placeholderHeight.current) / 2;
        handleAnimation(toValue);
        setMarginTop(value.trim().length !== 0 ? toValue * -1 : 0);
    };

    useEffect(() => {
        handleOnBlur();
    }, []);

    return (
        <View style={[styles.container, style, { marginTop }]}>
            <TextInput
                ref={inputRef}
                value={value}
                onChangeText={handleTextChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                style={[
                    styles.input,
                    error && { borderColor: errorBorderColor || '#e25a29' },
                    inputStyle,
                ]}
                onLayout={onInputLayout}
                secureTextEntry={secure}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmit}
                returnKeyType={returnKeyType}
                returnKeyLabel={returnKeyLabel}
            />
            <Animated.Text
                onLayout={onPlaceholderLayout}
                style={[
                    styles.placeholder,
                    { top: placeholderTop },
                    rtl ? { right: 5 } : { left: 5 },
                    placeholderStyle,
                ]}
            >
                {placeholder || 'placeholder'}
            </Animated.Text>
        </View>
    );
});