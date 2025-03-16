import { ReactNode } from "react"
import { ColorValue, TextStyle, ViewProps, ViewStyle } from "react-native"
import { TouchableOpacityProps } from "react-native-gesture-handler"

export interface BtnProps {
    loading?: boolean
    style?: ViewStyle
    textStyle?: TextStyle
    text: string
    textColor?: ColorValue | undefined
    bgColor?: ColorValue | undefined
    disabled?: boolean
    disabledStyle?: {
        backgroundColor?: ColorValue | undefined
        color?: ColorValue | undefined
    }
    onPress?: TouchableOpacityProps['onPress']
    children?: React.ReactNode | undefined
}