import {StyleSheet, View, Text,TextInput,Button, Modal, Image} from 'react-native';
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal2.png')}></Image>
                <TextInput 
                    style={styles.textInputContainer} 
                    placeholder="Your course goals..."
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                    
                </View>
                
            </View>
        </Modal>
    );
}
export default GoalInput; 

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems:'center', 
        paddingBottom: 24, 
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
        padding: 32,
        backgroundColor:'#311b6b'
      }, 
      textInputContainer: {
        borderWidth: 1,
        borderColor: '#cccccc', 
        width: '100%',
        padding: 8
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
      },
      button:{
        width: 100,
        marginHorizontal: 8
      },
      image:{
        width:100,
        height:100,
        margin:20
      },

});