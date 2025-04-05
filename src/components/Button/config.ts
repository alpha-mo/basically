import { ReactNode } from "react"
import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native"
import { TouchableOpacityProps } from "react-native-gesture-handler"

export interface BtnProps {
    text: string
    disabled?: boolean
    loading?: boolean
    children?: ReactNode | undefined
    onPress?: TouchableOpacityProps['onPress']

    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    loadingColor?: ColorValue | undefined
    disabledStyle?: {
        color?: ColorValue | undefined
        backgroundColor?: ColorValue | undefined
    }
}

export const preset: Pick<BtnProps, 'style' | 'textStyle' | 'disabledStyle'> = {
    style: {
        width: '100%',
        backgroundColor: '#420097',
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ededed',
        fontSize: 18,
        fontWeight: 'bold'
    },
    disabledStyle: {
        backgroundColor: '#919191',
        color: '#dedede'
    }
}