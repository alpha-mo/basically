//style.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 4,
        justifyContent: 'center',
        overflow: 'visible',
    },
    placeholder: {
        backgroundColor: '#fef8f0',
        position: 'absolute',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        fontSize: 12,
        color: '#3c008b',
        fontWeight: '700'
    },
    input: {
        backgroundColor: '#fef8f0',
        borderWidth: 2,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#a999b8'
    }
});