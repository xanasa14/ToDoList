import {StyleSheet, View, Text, Pressable}  from 'react-native';

function GoalItem(props) {
    return( 
        <Pressable 
            //Android
            android_ripple= {{color:'#210644'}}
            //Iphone
            style={({pressed}) => pressed && styles.pressedItem }
            onPress={props.onDeleteItem.bind(this, props.id)}
           
            >

            
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem:{
        opacity:0.5,
      },
      goalText:{
        color: 'white',
        padding:8
      }
});