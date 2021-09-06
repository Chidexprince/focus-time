import React from "react";
import {View, StyleSheet, Text} from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import { Countdown } from '../../components/Countdown';

export const Timer = ({focusSubject}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown />
            </View>  
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    countdownContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        paddingTop: spacing.xxl
    },
    title: {
        color: colors.white,
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})