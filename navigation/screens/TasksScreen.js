import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

//Custom components
import GoalItem from "../../components/GoalItem";
import GoalInput from "../../components/GoalInput";
import GoalsKey from "../../components/GoalsKey";
import EditGoal from "../../components/EditGoal";

function TasksScreen() {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInitalText, setEditInitalText] = useState();
  const [editKey, setEditKey] = useState();

  //Takes user inputted goal, and adds to array
  const addGoalHandler = (task) => {
    setTasks((currentGoals) => [
      ...currentGoals,
      task,
      // { key: Math.random(), value: goalTitle, isCompleted, setIsCompleted },
    ]);
    setIsAddMode(false); //Close modal once added
  };

  //Takes key of chosen item(goal) and filters array
  const removeGoalHandler = (goalKey) => {
    setTasks((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  //Takes editted goal + key of goal, creates new array and sets CourseGoals to that array
  const editChangeHandler = (newGoal, editKey) => {
    const newCourseGoals = tasks.map((goal) => {
      if (goal.key === editKey) {
        goal.value = newGoal;
        return goal;
      }
      return goal;
    });
    setTasks(newCourseGoals);
    setIsEditMode(false);
  };

  const handleTaskStateChange = (selectedTask) => {
    const newCourseGoals = tasks.map((goal) => {
      console.log(selectedTask, goal);
      if (goal.key === selectedTask.key) {
        selectedTask.isCompleted = !selectedTask.isCompleted;
        return selectedTask;
      }
      return goal;
    });
    setTasks(newCourseGoals);
  };

  const renderItem = ({ item }) => {
    return (
      <GoalItem
        item={item}
        onDelete={removeGoalHandler}
        onComplete={handleTaskStateChange}
        onEdit={() => {
          setIsEditMode(true);
          setEditInitalText(item.value);
          setEditKey(item.key);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.addTouchable}
        onPress={() => setIsAddMode(true)}
      >
        <Text style={styles.addNewTaskText}>Add new task</Text>
      </TouchableOpacity>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelAddTask={() => setIsAddMode(false)}
      />
      <View style={styles.goalListContainer}>
        <FlatList
          data={tasks} //flat list takes data (the array of goals)
          renderItem={renderItem}
        />
      </View>
      <EditGoal
        visible={isEditMode}
        onCancelEdit={() => setIsEditMode(false)}
        onPressEdit={editChangeHandler}
        defaultValue={editInitalText}
        itemKey={editKey}
      />
      <GoalsKey />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  addTouchable: {
    margin: 15,
  },

  addNewTaskText: {
    fontSize: 18,
    color: "#007AFF",
  },

  goalListContainer: {
    // backgroundColor: "lime",
    width: "100%",
    flex: 2,
  },
});

export default TasksScreen;
