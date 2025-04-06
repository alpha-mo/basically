//btn.tsx
import React, { FC } from 'react'
import { ExpoIcon } from './icon'
import { TabBtnProps } from './type'
import { TabTriggerSlotProps } from 'expo-router/ui'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export const BTN: FC<TabBtnProps> = ({
    isFocused, onPress, text, textColor,
    font = {
        size: 14,
        lineHeight: 14,
        style: {
            textAlignVertical: 'center'
        }
    },
    icon = {
        base: 'FontAwesome',
        iconName: 'arrow-down',
        size: 24,
        focus: {
            color: '#048ed4',
            padding: 5,
            borderWidth: 1.2,
            style: {
                backgroundColor: '#ffffff',
                borderRadius: 24
            }
        }
    },
}) => {

    const focusedIconSpace = icon.size + (icon.focus!.borderWidth! * 2) + (icon.focus!.padding! * 2)

    const textAnimStyle = useAnimatedStyle(() => ({
        top: withTiming(isFocused ? focusedIconSpace / 1.75 : -(font.lineHeight ?? 1), { duration: 200 }),
        opacity: withTiming(isFocused ? 1 : 0, { duration: 200 })
    }))

    const iconAnimStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: withSpring(isFocused ? -focusedIconSpace / 1.25 : 0, { damping: 10, stiffness: 100 }) },
            { scale: withSpring(isFocused ? 1.15 : 1, { damping: 10, stiffness: 100 }) }
        ]
    }))

    const styles = css({ font, icon, textColor }, isFocused, focusedIconSpace)

    return (
        <Pressable onPress={onPress} >
            <View style={[styles.container]} >
                <Animated.Text
                    style={[
                        styles.text,
                        font.style,
                        textAnimStyle
                    ]}
                >
                    {text}
                </Animated.Text>
                <Animated.View style={[isFocused && icon.focus?.style, styles.icon, iconAnimStyle]} >
                    <ExpoIcon base={icon.base} iconName={icon.iconName}
                        size={icon.size} color={isFocused ? icon.focus?.color : icon.color}
                        style={{ lineHeight: icon.size }}
                    />
                </Animated.View>
            </View>
        </Pressable>
    )
}

function css({ font, icon, textColor }: Omit<TabBtnProps,
    keyof TabTriggerSlotProps>, isFocused: boolean | undefined, focusedIconSpace: number) {

    return StyleSheet.create({
        container: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: focusedIconSpace,
        },
        text: {
            position: 'absolute',
            flex: 1,
            fontSize: font!.size,
            lineHeight: font!.lineHeight,
            color: textColor
        },
        icon: {
            padding: isFocused ? icon?.focus?.padding : 0,
            borderWidth: isFocused ? icon?.focus?.borderWidth : 0,
            height: focusedIconSpace,
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}