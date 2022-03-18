import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalsKey = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.allKey}
        onPress={() => props.onFilter(null)}
      >
        <Text style={[styles.keyText, { color: "#123bc4" }]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notCompleteKey}
        onPress={() => props.onFilter("pending")}
      >
        <Text style={[styles.keyText, { color: "#e82417" }]}>
          Pending
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.completeKey}
        onPress={() => props.onFilter("completed")}
      >
        <Text style={[styles.keyText, { color: "#409431ff" }]}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 0.13,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  allKey: {
    backgroundColor: "#9cb6e6",
    justifyContent: "center",
    flex:1,
    height: '100%',
  },

  notCompleteKey: {
    backgroundColor: "#e69c9c",
    justifyContent: "center",
    flex:1,
    height: '100%',
  },

  completeKey: {
    backgroundColor: "#9ce6a2",
    justifyContent: "center",
    flex:1,
    height: '100%',
  },

  keyText: {
    marginLeft: 3,
    fontSize: 17,
    textAlign: 'center',
  },
});

export default GoalsKey;
