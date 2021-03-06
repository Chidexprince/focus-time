import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes,spacing} from "../../utils/sizes";
import { colors } from '../../utils/colors';


export const Focus = ({addSubject}) => {
    const [tmpItem, setTmpItem] = useState(null);

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} onChange={({ nativeEvent }) => {setTmpItem(nativeEvent.text)}}/>
                    <RoundedButton size={50} title="+" onPress={() => addSubject(tmpItem)} />
                </View>   
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5
    },
    titleContainer: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontWeight: '600',
        fontSize: fontSizes.lg
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: "row",
        alignItems: 'center'
    },
    input: {
        borderRadius: 4,
        borderWidth: 0.5,
        flex: 1,
        marginRight: spacing.md
    }
});
