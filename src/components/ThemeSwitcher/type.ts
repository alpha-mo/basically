import { ColorValue, ViewStyle } from "react-native"

export interface ThemeSwitcherProps {
    onToggle?: () => void
    options?: {
        containerColor?: {
            dark?: {
                border?: ColorValue | undefined,
                background?: ColorValue | undefined
            }
            light?: {
                border?: ColorValue | undefined,
                background?: ColorValue | undefined
            }
        },
        buttonColor?: {
            dark?: {
                border?: ColorValue | undefined,
                background?: ColorValue | undefined
            }
            light?: {
                border?: ColorValue | undefined,
                background?: ColorValue | undefined
            }
        },
        iconColor?: {
            dark?: ColorValue | undefined
            light?: ColorValue | undefined
        },
    }
    style?: ViewStyle
    initialState?: 'light' | 'dark'
}

export const themeSwitcherPropsInit: ThemeSwitcherProps = {
    onToggle: () => { alert('Switch toggled') },
    options: {
        containerColor: {
            dark: {
                border: "#ccff4d",
                background: "#353b44"
            },
            light: {
                border: "#264446",
                background: "#eeece4"
            }
        },
        buttonColor: {
            dark: {
                border: "#ccff4d",
                background: "#d4d8de"
            },
            light: {
                border: "#264446",
                background: "#e09500"
            }
        },
        iconColor: {
            dark: "#2f2830",
            light: "#ffffff"
        }
    }
}