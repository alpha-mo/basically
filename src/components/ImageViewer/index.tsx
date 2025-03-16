import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { GestureDetector, Gesture, GestureHandlerRootView, Directions } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Image } from './image';

/**
 *  Gesture ***Fling.UP*** triggers *expo router ***back*** function*
 * 
 *  it is recommended to use this component with navigation
 * 
 *  as it has unknown behavior when gestur ***Fling.UP*** is triggered
 * 
 * ---
 */
export const ImageViewer = () => {
    const { localSrc, uri } = useLocalSearchParams();
    const router = useRouter();

    const scale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // Pinch Gesture
    const pinchGesture = Gesture.Pinch()
        .onUpdate((e) => {
            scale.value = e.scale;
        });

    // Pan Gesture (only when one finger is detected)
    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            translateX.value = e.translationX;
            translateY.value = e.translationY;
        });

    // Double tap gesture to zoom in/out
    const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onEnd(() => {
            const newScale = scale.value > 1 ? 1 : 1.75;
            scale.value = withTiming(newScale, { duration: 150 });

            // Reset translation to center after double tap
            translateX.value = withTiming(0, { duration: 150 });
            translateY.value = withTiming(0, { duration: 150 });
        });

    // Fling Gesture: Navigate Back Instead of Updating State
    const flingGesture = Gesture.Fling()
        .direction(Directions.UP)
        .numberOfPointers(1)
        .onStart(() => {
            runOnJS(router.back)();
        });

    const gesture = Gesture.Simultaneous(pinchGesture, panGesture, doubleTapGesture, flingGesture);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    if (localSrc && typeof (localSrc) === 'string') return (
        <View style={styles.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <GestureDetector gesture={gesture}>
                    <Image localSrc={parseInt(localSrc)} style={styles.image} animatedStyle={animatedStyle} />
                </GestureDetector>
            </GestureHandlerRootView>
        </View>
    );

    if (uri && typeof (uri) === 'string') return (
        <View style={styles.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <GestureDetector gesture={gesture}>
                    <Image uri={uri} style={styles.image} animatedStyle={animatedStyle} />
                </GestureDetector>
            </GestureHandlerRootView>
        </View>
    )

    return (
        <View style={styles.errContainer}>
            <Text>No image found</Text>
            <TouchableOpacity onPress={router.back}>
                <Text style={styles.link}>Back</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#020335',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    },
    errContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'blue'
    }
});
