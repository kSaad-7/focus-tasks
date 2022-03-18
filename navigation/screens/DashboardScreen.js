import react from "react";
import { View, Text, StyleSheet } from "react-native";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={styles.totalTasks}>
          <Text style={styles.text}>Total Tasks:  {props.stats.totalTasks}</Text>
        </View>
        <View style={styles.completedTasks}>
          <Text style={styles.text}>Tasks Completed:  {props.stats.totalTasksCompleted}</Text>
        </View>
        <View style={styles.pendingTasks}>
          <Text style={styles.text}>Tasks Pending:  {props.stats.totalTasksPending}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },

  stats:{
    flex:1,
  },

  totalTasks: {
    backgroundColor: '#123bc4cc',
    flex:1,
    justifyContent: "center"
    // margin: 10,
  },

  completedTasks: {
    backgroundColor: '#409431cc',
    justifyContent: "center",
    flex:1,
    // margin: 10,
  },

  pendingTasks: {
    backgroundColor: '#e82417cc',
    justifyContent: "center",
    flex:1,
    // margin: 10,
  },

  text:{
    fontSize: 40,
    margin: 10,

  },

});

export default Dashboard;
