import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;



export const Countdown = ({minutes = 1, isPaused, onProgress}) => {
    const [millis, setMillis] = useState(null);
    const mins = Math.floor(millis / 1000 / 60) % 60;
    const secs = Math.floor(millis / 1000) % 60;
    const interval = React.useRef(null);
    const countDown = () => {
        setMillis((time) => {
            if(time === 0) {
                //some stuffs
                return time;
            }

            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMillis(minutes))
            return timeLeft;
        })
    }

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    }, [minutes])

    useEffect(() => {
        if(isPaused) {
            if(interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current)
    }, [isPaused])
    return (
            <Text style={styles.text}>{formatTime(mins)}:{formatTime(secs)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
        padding: spacing.lg,
        backgroundColor: colors.blue
    }
})