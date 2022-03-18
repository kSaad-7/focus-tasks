import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

//Custom components
import GoalItem from "../../components/GoalItem";
import GoalInput from "../../components/GoalInput";
import GoalsKey from "../../components/GoalsKey";
import EditGoal from "../../components/EditGoal";

function TasksScreen(props) {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInitalText, setEditInitalText] = useState();
  const [editKey, setEditKey] = useState();
  const [filterType, setfilterType] = useState(null);

  useEffect(() => {
    const totalTasksCompleted = tasks.reduce((count, task) => {
      if (task.isCompleted) {
        count++;
      }
      return count;
    }, 0);
    props.setStats({
      totalTasks: tasks.length,
      totalTasksCompleted,
      totalTasksPending: tasks.length - totalTasksCompleted,
    });
  }, [tasks]);

  //Takes user inputted goal, and adds to array
  const addGoalHandler = (task) => {
    setTasks((currentGoals) => [...currentGoals, task]);
    setIsAddMode(false); //Close modal once added
  };

  //Takes key of chosen item(goal) and filters array
  const removeGoalHandler = (goalKey) => {
    setTasks((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== goalKey)
    );
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
    const newTasks = tasks.map((task) => {
      if (task.key === selectedTask.key) {
        selectedTask.isCompleted = !selectedTask.isCompleted;
        return selectedTask;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const getTasks = () => {
    if(filterType===null){
      return tasks;
    } else if(filterType==='completed'){
      return tasks.filter((task) => task.isCompleted)
    } else if(filterType==='pending'){
      return tasks.filter((task) => !task.isCompleted)
    }

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
        <Ionicons 
        name="add-circle-outline" 
        size={45} 
        color='#3b7dff'
        />
      </TouchableOpacity>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelAddTask={() => setIsAddMode(false)}
      />
      <View style={styles.goalListContainer}>
        <FlatList
          data={getTasks()} //flat list takes data (the array of goals)
          renderItem={renderItem}
        />
      </View>
      <EditGoal
        visible={isEditMode}
        onCancelEdit={() => setIsEditMode(false)}
        onPressConfirm={editChangeHandler}
        defaultValue={editInitalText}
        itemKey={editKey}
      />
      <GoalsKey onFilter={setfilterType} />
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
