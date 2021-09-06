import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;



export const Countdown = ({minutes = 20, isPaused = true}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));
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
            // report progress
            return timeLeft;
        })
    }

    useEffect(() => {
        if(isPaused) {
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current)
    }, [])
    return (
            <Text style={styles.text}>{formatTime(mins)}:{formatTime(secs)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.navyBlue,
        textAlign: 'center',
        padding: spacing.lg,
        backgroundColor: colors.white
    }
})