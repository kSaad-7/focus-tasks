import react , {useState, }from "react";
import { View, Modal, TextInput, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const EditGoal = (props) => {

  const [newGoal,setNewGoal] = useState()

  const editTextHandler = (enteredText) => {
    setNewGoal(enteredText)
  }
 
  return (
    <Modal 
    visible={props.visible} 
    animationType="slide"
    >
      <View style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontWeight: '500'}}>Edit task</Text>
        </View>
        <TextInput 
        style={styles.editTextInput} 
        defaultValue={props.defaultValue}  //Value when modal is opened.
        onChangeText={editTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Cancel" color="#f52f2f" onPress={props.onCancelEdit} />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => props.onPressEdit(newGoal,props.itemKey)} //Pass both the new goal + itemKey
          >
            <Text style={{fontSize:18, color:'#378a13'}}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccbcf5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    // backgroundColor: 'blue',
    flex: 0.1,
    bottom: 50,
  },

  editTextInput: {
    // backgroundColor: "red",
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 3,
    height: 40,
    width: "80%",
    bottom: 30,
  },

  buttonsContainer: {
    // backgroundColor: 'lime',
    flexDirection: "row",
    bottom: 30,
  },

  editButton: {
    // backgroundColor: 'red',
    justifyContent: "center",
    marginLeft: 10,
  },

});

export default EditGoal;
