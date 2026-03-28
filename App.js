import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);

    // ✅ Clear input after adding
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      
      <Text style={styles.title}>My Course Goals</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Enter your goal...'
          onChangeText={goalInputHandler}
          value={enteredGoalText} // ✅ controlled input
        />
        <View style={styles.button}>
          <Button title='Add' onPress={addGoalHandler} color="#4CAF50" />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
  },

  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  goalsContainer: {
    flex: 1,
  },

  goalItem: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  goalText: {
    color: '#fff',
    fontSize: 16,
  },
});



