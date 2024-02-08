import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ text }) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Task;

const taskStyles = StyleSheet.create({});
