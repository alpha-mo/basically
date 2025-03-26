//type.ts
import type { ComponentProps } from 'react'
import {
    FontAwesome, AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, FontAwesome6, Fontisto,
    Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial,
} from '@expo/vector-icons'
import { TabTriggerSlotProps } from 'expo-router/ui'
import { BottomTabBarProps, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native'

export type IconMap = {
    FontAwesome: ComponentProps<typeof FontAwesome>["name"]
    AntDesign: ComponentProps<typeof AntDesign>["name"]
    Entypo: ComponentProps<typeof Entypo>["name"]
    EvilIcons: ComponentProps<typeof EvilIcons>["name"]
    Feather: ComponentProps<typeof Feather>["name"]
    FontAwesome5: ComponentProps<typeof FontAwesome5>["name"]
    FontAwesome6: ComponentProps<typeof FontAwesome6>["name"]
    Fontisto: ComponentProps<typeof Fontisto>["name"]
    Foundation: ComponentProps<typeof Foundation>["name"]
    Ionicons: ComponentProps<typeof Ionicons>["name"]
    MaterialCommunityIcons: ComponentProps<typeof MaterialCommunityIcons>["name"]
    MaterialIcons: ComponentProps<typeof MaterialIcons>["name"]
    Octicons: ComponentProps<typeof Octicons>["name"]
    SimpleLineIcons: ComponentProps<typeof SimpleLineIcons>["name"]
    Zocial: ComponentProps<typeof Zocial>["name"]
}

export type IconType = keyof IconMap

export interface TabBtnProps extends Omit<TabTriggerSlotProps, 'children'> {
    onPress?: TouchableOpacityProps['onPress']
    text?: string
    textColor?: string | undefined
    padding?: number
    font?: {
        size?: number
        lineHeight?: number
        style?: Pick<TextStyle, 'fontFamily' | 'fontWeight' | 'textAlignVertical'>
    }
    icon?: {
        /** some of these props are spreaded out of styles for calculations */
        [K in IconType]: {
            base: K
            iconName: IconMap[K]
            size: number
            color?: string | undefined
            focus?: {
                color?: string | undefined
                padding?: number
                borderWidth?: number
                style?: Pick<ViewStyle,
                    'backgroundColor' |
                    'borderColor' | 'borderRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius'
                    | 'borderBottomLeftRadius' | 'borderBottomRightRadius'
                >
            }
        }
    }[IconType]
}

export type ExpoIconProps<T extends IconType = IconType> = {
    /** The icon set to use (e.g., `"FontAwesome"`, `"MaterialIcons"`). */
    base: T
    /** The name of the icon from the selected icon set. */
    iconName: IconMap[T]
    /** The size of the icon (default: `24`). */
    size?: number
    /** The color of the icon (default: `"black"`). */
    color?: string

    style?: StyleProp<TextStyle>
}

// Extend BottomTabNavigationOptions to include tabButtonProps
export interface TabNavigationOptions extends BottomTabNavigationOptions {
    tabButtonProps?: Pick<TabBtnProps,
        "text" | 'textColor' | 'font' | 'padding' | 'icon'
    >
}

export interface TabBarProps extends BottomTabBarProps {
    style?: Pick<ViewStyle,
        'borderColor' | 'borderTopWidth' | 'backgroundColor' | 'justifyContent' |
        'alignItems' | 'padding' | 'paddingVertical' | 'paddingBottom'
    >
    useFocusedTabColor?: boolean
}