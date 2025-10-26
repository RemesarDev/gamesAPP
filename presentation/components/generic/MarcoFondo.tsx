import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children?: ReactNode;
    colors?: readonly [string, string, ...string[]];
    style?: StyleProp<ViewStyle>;
}

const MarcoFondo = ({ children, colors = ['#dbeeff', '#ffffff'] as const, style }: Props) => {
    return (
        <LinearGradient colors={colors} style={[styles.gradient, style]}>
            <SafeAreaView style={styles.safeAreaInner} edges={["top", "bottom", "left", "right"]}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    safeAreaInner: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    gradient: {
        flex: 1,
        padding: 0,
    },
});

export default MarcoFondo;
