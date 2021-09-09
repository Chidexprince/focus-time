import React from "react";
import {View, StyleSheet, FlatList, Text, SafeAreaView} from "react-native";


import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";


const HistoryItem = ({item, index}) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}

export const FocusHistory = ({focusHistory, onClear}) => {
    const clearHistory = () => {
        onClear();
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, alignItems: 'center'}}>
                
                {focusHistory.length ? (
                <>
                    <Text style={styles.title}>Things we've focused on</Text>
                    <FlatList 
                       style={{ flex: 1}} 
                       contentContainerStyle={{ alignItems: 'center'}}
                       data={focusHistory}
                       renderItem={HistoryItem}
                       keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={styles.clearContainer}>
                        <RoundedButton  size={75} title="Clear" onPress={() => onClear()}/>
                    </View>
                </>
                ): null}
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status === 1 ? colors.green : colors.red,
        fontSize: fontSizes.md
    }),
    title : {
        color: colors.white,
        fontSize: fontSizes.lg,

    },
    clearContainer: {
        flex: 0.5,
        alignItems: 'center'
    }

})