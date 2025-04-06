// icon.tsx
import React, { memo } from 'react'
import {
    FontAwesome, AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, FontAwesome6, Fontisto,
    Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial,
} from '@expo/vector-icons'
import { IconType, ExpoIconProps } from './type'

// Mapping icon set names to their corresponding components
const iconMap = {
    FontAwesome,
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome5,
    FontAwesome6,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
}

export const ExpoIcon = memo(
    <T extends IconType>
        (
            { base, iconName, size = 24, color = "black", style }: ExpoIconProps<T>
        ) => {
        const IconComponent = iconMap[base];

        return <IconComponent name={iconName} size={size} color={color} style={style} />
    }
)
