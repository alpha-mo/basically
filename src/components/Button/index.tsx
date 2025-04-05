import { FC } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { BtnProps, preset } from './config'

/**
 * #### Props:
 ```tsx
 * - loading?: boolean
 * - style?: ViewStyle
 * - textStyle?: TextStyle
 * - text: string
 * - loadingColor?: ColorValue | undefined
 * - disabled?: boolean
 * - disabledStyle?: {
        backgroundColor?: ColorValue | undefined
        color?: ColorValue | undefined
    }
 * - onPress?: TouchableOpacityProps['onPress']
 * - children?: ReactNode | undefined
 ```
 */
export const Button: FC<BtnProps> = ({
    loading = false, text,
    style, textStyle, loadingColor,
    disabled = false, disabledStyle, onPress, children
}) => {

    return (
        <TouchableOpacity
            activeOpacity={disabled || loading ? 1 : 0.5}
            disabled={disabled || loading}
            onPress={onPress}
            style={[
                preset.style, style,
                (disabled || loading) && { backgroundColor: disabledStyle?.backgroundColor || preset.disabledStyle?.backgroundColor }
            ]}
        >
            {loading
                ? (<ActivityIndicator size="small" color={loadingColor} />)
                : children ??
                <Text style={[
                    preset.textStyle, textStyle,
                    disabled && { color: disabledStyle?.color || preset.disabledStyle?.color }
                ]}>
                    {text}
                </Text>
            }
        </TouchableOpacity>
    )
}