import { ColorValue, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface InputProps {
    style?: Pick<ViewStyle,
        'margin' | 'marginBottom' | 'marginTop' | 'marginLeft' | 'marginRight' | 'marginVertical' | 'marginHorizontal'
        | 'height' | 'width' | 'transform' | 'translateX' | 'translateY' | 'transformOrigin'
    >
    placeholderStyle?: Pick<TextStyle,
        'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'opacity' | 'textAlign' | 'textAlignVertical' | 'backgroundColor'
        | 'borderColor' | 'borderRadius' | 'borderWidth' | 'borderStyle'
    >
    placeholder?: string
    inputStyle?: Pick<TextStyle,
        'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'opacity' | 'textAlign' | 'textAlignVertical' | 'backgroundColor'
        | 'borderColor' | 'borderRadius' | 'borderWidth' | 'borderStyle'
    >
    rtl?: boolean // right to left
    keyboardType?: TextInputProps['keyboardType']
    onSubmit?: TextInputProps['onSubmitEditing']
    secure?: TextInputProps['secureTextEntry']
    error?: boolean
    errorBorderColor?: ColorValue | undefined
}

export interface InputRef {
    getValue: () => string;
}