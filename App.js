import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
});
