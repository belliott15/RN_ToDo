import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={taskStyles.item}>
      <View style={taskStyles.itemLeft}>
        <TouchableOpacity style={taskStyles.square}></TouchableOpacity>
        <Text style={taskStyles.itemText}>{text}</Text>
      </View>
      <View style={taskStyles.circle}></View>
    </View>
  );
};

export default Task;

const taskStyles = StyleSheet.create({
  item: {
    backgroundColor: "#CBEEE7",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#98D9DD",
    width: 24,
    height: 24,
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 5,
    marginRight: 15,
    opacity: 0.5,
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    width: 15,
    height: 15,
    borderColor: "#2B34CE",
    borderWidth: 2,
    borderRadius: 5,
  },
});
