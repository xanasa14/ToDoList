import {StyleSheet, View, Text,TextInput,Button} from 'react-native';
import {useState} from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };



    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInputContainer} 
                placeholder="Your course goals..."
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}
export default GoalInput; 

const styles = StyleSheet.create({
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
});