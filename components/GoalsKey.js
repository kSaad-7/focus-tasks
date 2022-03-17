import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

//MAYBE CHANGE COLOURS OF KEYS ONCE WHOLE PROGRAM FINISED

const GoalsKey = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notCompleteKey}>
        <Ionicons name="ellipse" color="#e82417" size={7} />
        <Text style={[styles.keyText, { color: "#e82417" }]}>
          Not yet completed
        </Text>
      </View>
      <View style={styles.completeKey}>
        <Ionicons name="ellipse" color="#56bd2d" size={7} />
        <Text style={[styles.keyText, { color: "#56bd2d" }]}>Completed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 0.13,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  notCompleteKey: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },

  completeKey: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },

  keyText: {
    marginLeft: 3,
    fontSize: 14,
  },
});

export default GoalsKey;
