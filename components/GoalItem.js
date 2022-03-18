import react, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

//Components

// TO DO
// --------------  #89e882bb = Green  --------    = Red ------- #f55151cc

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.listItem,
        { backgroundColor: props.item.isCompleted ? "#89e882bb" : "#f55151cc" },
      ]}
      onPress={() => props.onComplete(props.item)}
    >
      <View style={styles.textContainer}>
        <Text style={styles.listItemText}>{props.item.value}</Text>
      </View>
      <View style={styles.listButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 4.5 }]}
          onPress={props.onEdit}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onDelete(props.item.key)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    // backgroundColor: "orange",
    borderWidth: 0.5,
    borderColor: "silver",
    borderRadius: 7,
    padding: 3,
    marginHorizontal: 5,
    marginVertical: 7,
  },

  textContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    padding: 5,
    marginBottom: 4,
  },

  listItemText: {
    fontSize: 18,
  },

  listButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  button: {
    alignItems: "center",
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: "#000000aa",
    padding: 5,
    // width: 54,
  },
});

export default GoalItem;
