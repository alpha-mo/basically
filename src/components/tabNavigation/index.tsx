//tabBar.tsx
import React, { FC, useState } from "react"
import { BTN } from "./btn"
import { View, StyleSheet } from "react-native"
import { TabNavigationOptions, TabBarProps } from "./type"

export const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation, style: propStyle, useFocusedTabColor }) => {

    const filteredItems = state.routes.filter(
        (route) => !['_sitemap', '+not-found'].includes(route.name)
    )

    const [barBorderColor, setBarBorderColor] = useState('transparent')

    return (
        <View
            style={[
                styles.container,
                propStyle,
                useFocusedTabColor && { borderColor: barBorderColor }
            ]}
        >
            {filteredItems.map((route, index) => {
                const options = descriptors[route.key].options as TabNavigationOptions
                const { tabButtonProps } = options
                const isFocused = state.index === index

                return (
                    <BTN
                        key={route.key}
                        onPress={() => {
                            navigation.navigate(route.name)
                            setBarBorderColor(prev => tabButtonProps?.textColor || prev)
                        }}
                        isFocused={isFocused}
                        text={options.title || route.name}
                        textColor={tabButtonProps?.textColor || '#009bcf'}
                        font={tabButtonProps?.font || {
                            lineHeight: 14,
                            size: 14,
                            style: {
                                textAlignVertical: 'center',
                                fontWeight: 600
                            }
                        }}
                        icon={tabButtonProps?.icon || {
                            base: 'FontAwesome',
                            iconName: 'home',
                            color: '#7a9da9',
                            size: 24,
                            focus: {
                                borderWidth: 1.25,
                                padding: 5,
                                color: '#009bcf',
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: 18,
                                    borderColor: '#009bcf'
                                }
                            }
                        }}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        width: "100%",
        alignSelf: "center",
    },
})