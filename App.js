import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/timer';
import { spacing } from './src/utils/sizes';
import { FocusHistory } from './src/features/focus/focusHistory';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status}])
  }

  const onClear = () => {
    setFocusHistory([])
  }

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      console.log(error);
    }
  }

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if(history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    loadFocusHistory();
  }, []) 

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])



  return (
    <View style={styles.container}>
      {focusSubject ? (
      <Timer focusSubject={focusSubject} onTimerEnd={() => { 
        addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
        setFocusSubject(null)} } 
        clearSubject={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
          setFocusSubject(null)}}/>
      ) : (
        <>
        <View style={{ flex: 1}}>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory}  onClear={onClear}/>
        </View>
      
      </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.navyBlue, 
  },
});
