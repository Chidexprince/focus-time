import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({addSubject}) => {
    const [tmpItem, setTmpItem] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} onSubmitEditing={({ nativeEvent }) => {setTmpItem(nativeEvent.text)}}/>
                    <RoundedButton size={50} title="+" onPress={() => addSubject(tmpItem)} />
                </View>   
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 22
    },
    inputContainer: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    input: {
        borderRadius: 4,
        borderWidth: 0.5,
        flex: 1,
        marginRight: 20
    }
});