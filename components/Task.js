import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <View style={taskStyles.item}>
      <View style={taskStyles.itemLeft}>
        {pressed ? (
          <TouchableOpacity
            style={taskStyles.squarePressed}
            onPress={handlePress}
          ></TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={taskStyles.square}
            onPress={handlePress}
          ></TouchableOpacity>
        )}
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
  squarePressed: {
    backgroundColor: "red",
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
