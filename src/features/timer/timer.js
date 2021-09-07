import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text} from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from "../../components/RoundedButton";

import { Timing } from "./timing";

export const Timer = ({focusSubject}) => {
    useKeepAwake()
    const [minutes, setMinutes] = useState(1)
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false)
        console.log(min)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown isPaused={!isStarted} minutes={minutes} onProgress={onProgress}/>
            </View>  
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.progressBar}>
                <ProgressBar 
                progress={progress}
                color={colors.blue}
                style={{height: 15}}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime}/>
            </View>
            <View style={styles.buttonWrapper}>
                {isStarted ? (
                    <RoundedButton   title="Pause" onPress={() => setIsStarted(false)} />
                ) : (
                    <RoundedButton   title="Start"  onPress={() => setIsStarted(true)} />
                )}
               
                
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
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar: {
        paddingTop: spacing.md
    }
})