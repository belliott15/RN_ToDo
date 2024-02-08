import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task.js";

export default function App() {
  return (
    <View style={styles.container}>
      {/* todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>
        <View style={styles.item}>
          <Task text={"Text1"} />
          <Task text={"Text2"} />
          <Task text={"Text3"} />
          <Task text={"Text4"} />
          <Task
            text={
              "Text5 and then a bunch more text to test the text wrap funcitonailty"
            }
          />
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBDBDF",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 3,
    marginLeft: 10,
  },
  addWrapper: {
    borderRadius: 60,
    width: 60,
    height: 60,
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    opacity: 0.5,
  },
});
