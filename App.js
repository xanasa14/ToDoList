import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>


          <TextInput 
            style={styles.textInputContainer} 
            placeholder="Your course goals..."
            onChangeText={goalInputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView alwaysBounceVertical={false}> 
        
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
              
            </Text>
        </View>
        ))}
      </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop : 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:'center', 
    paddingBottom: 24, 
    borderBottomWidth:1,
    borderBottomColor: '#cccccc'
  }, 
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#cccccc', 
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    
  },
  goalText:{
    color: 'white',
  }

});
