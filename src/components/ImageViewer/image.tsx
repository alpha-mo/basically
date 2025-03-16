import React, { FC } from 'react'
import { ImagePropsBase, ImageStyle } from 'react-native'
import Animated from 'react-native-reanimated'

type ImageProps = {
    localSrc?: number
    uri?: string
    style?: ImageStyle
    animatedStyle?: Pick<ImageStyle, 'transform'>
    resizeMode?: ImagePropsBase['resizeMode']
}

export const Image: FC<ImageProps> = ({ localSrc, uri, style, animatedStyle, resizeMode }) => {

    if (uri) return (
        <Animated.Image
            source={{ uri }}
            style={[style, animatedStyle]}
            resizeMode={resizeMode}
        />
    )

    if (localSrc) return (
        <Animated.Image
            source={localSrc}
            style={[style, animatedStyle]}
            resizeMode={resizeMode}
        />
    )
}
