import react, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

// xxxxxx #378a13 - GREEN       #f52f2f - RED xxxxxx

// TO DO

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addButtonHandler = () => {
    const task = { key: Math.random(), value: enteredGoal, isCompleted: false };
    props.onAddGoal(task);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalAddContainer}>
        <View style={styles.header}>
          <Text style={{ fontWeight: "500" }}>Add a task</Text>
        </View>
        <TextInput
          autoFocus={true}
          style={styles.goalInput}
          placeholder="Enter task"
          placeholderTextColor="grey"
          onChangeText={goalInputHandler}
          onSubmitEditing={addButtonHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Cancel"
            color="#f52f2f"
            onPress={props.onCancelAddTask}
          />
          <TouchableOpacity
            style={styles.goalAddButton}
            onPress={addButtonHandler}
          >
            <Text style={{ fontSize: 18, color: "#378a13" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalAddContainer: {
    backgroundColor: "#cbf1f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  goalInput: {
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
    marginTop: 10,
    bottom: 30,
  },

  goalAddButton: {
    // backgroundColor: 'red',
    justifyContent: "center",
    marginLeft: 10,
  },

  header: {
    // backgroundColor: 'blue',
    flex: 0.1,
    bottom: 50,
  },
});

export default GoalInput;
